import { ADD_PRODUCT, FETCH_PRODUCT } from "../action/productType";

const initialState = {
  product: "",
  getAllProducts: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case FETCH_PRODUCT:
      return {
        ...state,
        getAllProducts: action.payload,
      };

    default:
      return state;
  }
};
export default productReducer;
