import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const cartSchema = new Schema({
    products: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity: {
        type: Number,
        default: 1,
    },
});

const userSchema = new Schema({
    userName: {
        type: String,
        require: [true, "Username is required"],
        lowerCase: true,
        unique: [true, "username is already taken"],
    },
    password: {
        type: String,
        required: [true, "Password is requuired"],
    },
    email: {
        type: String,
        require: [true, "E-mail is required"],
        unique: [true, "email is already registed"],
        lowerCase: true,
    },
    address: {
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String,
    },
    cart: [cartSchema],
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
    preferences: {
        theme: {
            type: String,
            enum: ["light", "dark"],
            default: "light",
        },
        notifications: {
            type: Boolean,
            default: true,
        },
    },
    refreshToken: {
        type: String,
    },
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            id: this._id,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    );
};

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            id:this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        }
    )
}

export const User = mongoose.model("User",userSchema)
