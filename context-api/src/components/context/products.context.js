import { createContext, useState,useContext,useEffect } from "react";

const ProductContext = createContext({
    products : []
})

export const useProduct = () => useContext(ProductContext);

export default function ProductContextProvider({children}){
    const [products,setProducts] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_MOCKS_PRODUCTS_PATH}`)
            .then(response => response.json())
            .then(result => {
                if (result.products) {
                    setProducts(result.products)
                }
            })
    }, [])

    const value ={
        products
    }
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}