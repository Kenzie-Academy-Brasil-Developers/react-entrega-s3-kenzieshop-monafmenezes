import { ADD_PRODUCTS } from "./actionTypes"

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCTS,
        product
    }
}