import { useState, useContext, createContext } from 'react'

const CartContext = createContext()


export const CartContextProvider = ({ children }) => {
    const [productsInCart, setProductsInCart] = useState(
        JSON.parse(localStorage.getItem('shopping-cart')) || []
    )

    
    const addProductToCart = (product) => {
        const newProduct = {...product, count: 1}
        setProductsInCart([...productsInCart, newProduct])
    }

    return (
        <CartContext.Provider value={{ productsInCart, setProductsInCart, addProductToCart }}>
            {children}
        </CartContext.Provider>
    )
}


export const useCartContext = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a Cart Provider')
    }
    return context
}

