import { ADD_PRODUCTS, REMOVE_PRODUCT } from "./actionTypes"

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCTS,
        product
    }
}

export const removeProduct = (product) => {
    return{
        type: REMOVE_PRODUCT, 
        product
    }
}