import { createStore, combineReducers } from "redux";
import productsReducer from "./modules/products/reducer";

const reducers = combineReducers({product: productsReducer})
const store = createStore(reducers)

export default store