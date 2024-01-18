import { useEffect, useState } from "react"
export const useCart = () => {
    const [cartItem, setCartItem] = useState([])

    useEffect(() => {
        const localData = localStorage.getItem('cart');
        if (localData) {
            const cartItem = JSON.parse(localData);
            console.log(cartItem);
            setCartItem(cartItem)
        }
    }, []);

    const inCart = (id) => {
        const found = cartItem.findIndex(item => item.id === id) != -1;

        return found;
    }

    const handleCart = (e, id,Incomingdata) => {
        e.preventDefault();
        const existingCartItem = cartItem;
        const itemExists = existingCartItem.some(item => item.id === id);

        if (!itemExists) {
            const selectedItem = Incomingdata.find(item => item.id === id);
            if (selectedItem) {
                const updatedCartItems = [...existingCartItem, selectedItem];
                setCartItem(updatedCartItems); 
                localStorage.setItem('cart', JSON.stringify(updatedCartItems));
               
            }
        } else {
            console.log('Item already added');
        }
    };

    const removeCartItem = (id) => {
        const removedItem = cartItem.filter(item => item.id != id);
        localStorage.setItem('cart', JSON.stringify(removedItem))
        setCartItem(removedItem);
    }

    return { cartItem ,removeCartItem,inCart,handleCart}
}