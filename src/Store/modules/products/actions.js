import { PRODUCTS } from "./actionTypes"
export const products = (product) => {
    return {
        type: PRODUCTS,
        product
    }
}