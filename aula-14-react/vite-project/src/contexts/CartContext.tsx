import { createContext, useState, useContext } from 'react';

const CartContext = createContext(null);

export const useCartContext = () => useContext(CartContext);

export const cartItemsQuantity = (cartItemsObject) => {
    let quantity = 0;

    for (const itemId in cartItemsObject) {
        quantity += cartItemsObject[itemId];
    }

    return quantity;
};

export const CartContextProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const addToCart = (itemId) => {
        const updatedCart = { ...cartItems, [itemId]: (cartItems[itemId] ?? 0) + 1 };
        setCartItems(updatedCart);
    };
    const removeFromCart = (itemId) => {
        const cartItemsCopy = { ...cartItems };
        delete cartItemsCopy[itemId];
        setCartItems(cartItemsCopy);
    };
    const decreaseProductQuantity = (itemId) => {
        if (cartItems[itemId] > 1) {
            const updatedCart = { ...cartItems, [itemId]: cartItems[itemId] - 1 };
            setCartItems(updatedCart);
        } else {
            removeFromCart(itemId);
        }
    };
    const toggleCartOpenState = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <CartContext.Provider
            value={{
                isCartOpen,
                cartItems,
                addToCart,
                removeFromCart,
                decreaseProductQuantity,
                toggleCartOpenState,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
