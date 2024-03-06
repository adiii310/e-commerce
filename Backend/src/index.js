import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

dotenv.config({
    path: "./.env",
});

const app = express();
const port = process.env.PORT;

connectDB()
    .then(() => {
        app.get("/", (req, res) => {
            res.send("hello boi");
        });
        app.listen(port, () =>
            console.log("API is running on port ", port)
        );
    })
    .catch(() => {
        console.log("Error While connecting with app ", error.message);
    });
