import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { addProduct } from "../../Redux/index";
const AddNewProducts = (props) => {
  const [product, setProduct] = useState("");
  const { register, handleSubmit, errors } = useForm();
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    const newProduct = { ...product };
    newProduct[e.target.name] = e.target.value;
    setProduct(newProduct);
  };
  // console.log({ product });
  const onSubmit = (product) => {
    // console.log("data", product);
    addProduct(product);
    setSuccess(!success);
  };
  if (success) {
    setTimeout(() => setSuccess(false), 3000);
  }
  return (
    <div>
      <h4 className="text-center mt-4">Add New Product </h4>
      <div className="container">
        <div className="row">
          <div className="col-xs-13 col-sm-12 col-md-6 d-block mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="py-3 ">
              <div className="form-group">
                <input
                  name="name"
                  onChange={handleChange}
                  ref={register({ required: true })}
                  className="form-control"
                  placeholder="Product Name"
                />
                {errors.name && (
                  <span className="error">Product Name is required</span>
                )}
              </div>
              <div className="form-group">
                <input
                  name="description"
                  onChange={handleChange}
                  ref={register({ required: true })}
                  className="form-control"
                  placeholder="Product description"
                />
                {errors.description && (
                  <span className="error">product description is required</span>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  onChange={handleChange}
                  name="price"
                  ref={register({ required: true })}
                  className="form-control"
                  placeholder="Product price"
                />
                {errors.price && (
                  <span className="error">Product price is required</span>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  onChange={handleChange}
                  name="quantity"
                  ref={register({
                    required: true,
                  })}
                  className="form-control"
                  placeholder="Product quantity "
                />
                {errors.quantity && (
                  <span className="error">Product quantity is required</span>
                )}
              </div>
              <div className="form-group add-product">
                <button type="submit" className="btn btn-success add-product ">
                  <FontAwesomeIcon icon={faPlus} className="mr-1" />
                  Add Product
                </button>
                {success && (
                  <span className="alert alert-success">
                    Product added successfully
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => {
      dispatch(addProduct(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewProducts);
