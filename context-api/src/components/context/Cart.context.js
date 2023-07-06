import { createContext, useContext,useState } from "react";

const CartContext = createContext({
    cartProducts: [],
    setCartProducts: () => Promise,
});

export const useCart = () => useContext(CartContext);

export default function CartContextProvider({children})
{
    const [cartProducts,setCartProducts] = useState([]);

    const value = {
        cartProducts,
        setCartProducts,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}