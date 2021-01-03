import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../style/Product.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
function Product() {
  const { register, handleSubmit, errors } = useForm();
  const [product, setProduct] = useState({});
  const [success, setSuccess] = useState(false);
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    e.preventDefault();
    const newProduct = { ...product };
    newProduct[e.target.name] = e.target.value;
    setProduct(newProduct);
  };
  const handleFileChange = (e) => {
    // const newFile = { photo: e.target.files[0] };
    setFile({ file: e.target.files[0] });
  };

  const onSubmit = () => {
    const formData = new FormData();
    console.log(product, file);
    formData.append("file", file);
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("quantity", product.quantity);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios
      .post(
        "http://localhost:5000/api/v1/products/addProduct",
        formData,
        config
      )
      .then((response) => {
        alert("file send successfully");
        setSuccess(!success);
      })

      .catch((error) => {
        console.error(error);
      });
  };
  if (success) {
    setTimeout(() => setSuccess(false), 3000);
  }
  return (
    <div>
      <h3 className="product-h1 mt-4">Add New Product</h3>
      <div className="row">
        <div className="col-md-4 d-block mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="py-3 ">
            <div className="form-group">
              <input
                name="name"
                onBlur={handleBlur}
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
                onBlur={handleBlur}
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
                onBlur={handleBlur}
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
                onBlur={handleBlur}
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
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Upload a image</label>
              <input
                type="file"
                onChange={handleFileChange}
                name="file"
                ref={register({
                  required: true,
                })}
                className="form-control"
              />
              {errors.file && <span className="error">image is required</span>}
            </div>
            <div className="form-group add-product">
              <button type="submit" className="btn btn-success add-product ">
                <FontAwesomeIcon icon={faPlus} className="mr-1" />
                Add Product
              </button>{" "}
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
  );
}

export default Product;
