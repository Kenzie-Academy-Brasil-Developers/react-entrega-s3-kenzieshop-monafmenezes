import { ADD_PRODUCTS, REMOVE_PRODUCT} from './actionTypes'

const cartReducer = (state=[], action) => {
    switch(action.type) {
        case ADD_PRODUCTS:
        
            return [...state, action.product]
        
        case REMOVE_PRODUCT:
            return action.product

        default:
            return state
    }
}
export default cartReducer