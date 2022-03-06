import { ADD_PRODUCTS} from './actionTypes'

const cartReducer = (state=[], action) => {
    switch(action.type) {
        case ADD_PRODUCTS:
        
            return [...state, action.product]

        default:
            return state
    }
}
export default cartReducer