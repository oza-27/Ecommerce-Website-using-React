import { createContext, useState } from "react";


const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd
    )

    if (existingCartItem) {
        return cartItems.map(
            (cartitem) => cartitem.id === productToAdd.id ?
                { ...cartitem, quantity: cartitem.quantity + 1 }
                : cartitem
        )
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { }
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    const value = { isCartOpen, setIsCartOpen, cartItems };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}