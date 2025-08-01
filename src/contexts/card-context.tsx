'use client'

import { createContext, ReactNode, useContext, useState } from "react";

interface CardItem {
    productId: string
    quantity: number
}

interface CartContextType {
    items: CardItem[]
    addToCart: (productId: string) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
    const [cardItems, setCardItems] = useState<CardItem[]>([])

    function addToCart(productId: string) {
        setCardItems(state => {
            const productInCart = state.some((item) => item.productId === productId)

            if (productInCart) {
                return state.map(item => {
                    if (item.productId === productId) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            } else {
                return [...state, { productId, quantity: 1 }]
            }
        })
    }

    return (
        <CartContext.Provider value={{ items: cardItems, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)