import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../Redux/index";
const GetAllProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  });
  const getAllProducts = useSelector((state) => state.getAllProducts);
  console.log(getAllProducts);
  return (
    <div>
      <h4 className="text-center mt-3">
        All Products : {getAllProducts.length}
      </h4>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-7 d-block mx-auto">
            <div className="table-responsive">
              <table className="table table-striped table-hover  table-bordered table-dark text-light ">
                <thead>
                  <tr className="text-center table-active">
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {getAllProducts.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td key={item._id}>{item._id}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAllProduct;
