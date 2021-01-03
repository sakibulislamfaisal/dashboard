import { createStore, applyMiddleware } from "redux";
import productReducer from "./reducer/productReducer";
const thunkMiddleware = require("redux-thunk").default;
const store = createStore(productReducer, applyMiddleware(thunkMiddleware));

export default store;
