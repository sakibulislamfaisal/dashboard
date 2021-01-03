import { ADD_PRODUCT, FETCH_PRODUCT } from "./productType";
const axios = require("axios");
export const addProduct = (product) => {
  // console.log("action product", product);
  var OPTIONS = {
    url: "http://localhost:5000/api/v1/products/addProduct",
    method: "POST",
    data: product,
    headers: {
      // Authorization:
      //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmYwNzU0ZTU3OWY0MjUyM2NkMThjZWUiLCJlbWFpbCI6InNha2lic0BnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJzYWtpc2IiLCJsYXN0TmFtZSI6Imhhc2FuIiwiaWF0IjoxNjA5NTk4ODIzLCJleHAiOjE2MDk2MDI0MjN9.pb3aZRMDnGZOnk-2pKAiPQjfwVHu1l11aMN9lBzRCfU",
      "Content-type": "application/json",
    },
  };

  axios(OPTIONS)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const fetchProduct = (allProduct) => {
  return {
    type: FETCH_PRODUCT,
    payload: allProduct,
  };
};

export const getProduct = () => {};
