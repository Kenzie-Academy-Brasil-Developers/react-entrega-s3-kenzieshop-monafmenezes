import { createStore, combineReducers } from "redux";
import productsReducer from "./modules/products/reducer";
import cartReducer from "./modules/cart/reducer";

const reducers = combineReducers({products: productsReducer, product: cartReducer})
const store = createStore(reducers)


export default store