import { useState, useEffect } from "react";

export const useFav = () => {
    const [favourite, setFavourite] = useState(JSON.parse(localStorage.getItem('myfav')) || []);

    const handleFav = (e, id, item) => {
        e.preventDefault();
        const data = JSON.parse(localStorage.getItem('myfav')) || [];
        const isAdded = data.findIndex(fav => fav.id === id);

        if (isAdded === -1) {
            const update = [...data, item];
            localStorage.setItem('myfav', JSON.stringify(update));
        } else {
            const update = data.filter(item => item.id !== id);
            localStorage.setItem('myfav', JSON.stringify(update));
        }

    
        setFavourite(JSON.parse(localStorage.getItem('myfav')) || []);
    };
    const inFav = (id) => {
        const found = favourite.findIndex(item => item.id === id) != -1;

        return found;
    }

    return { handleFav, favourite,inFav };
};
