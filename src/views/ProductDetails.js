import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getProductsApi } from "../api/shopping";
import LoadingIndicator from "../components/common/LoadingIndicator";
import RouteDefinitions from "../routerModule/RouteDefinition";
import { colorPrices } from "../utils";

const ProductDetails = () => {
  const { id, color } = useParams();
  const [product, setProduct] = useState({});
  const [isFetchingProducts, setIsFetchingProducts] = useState(true);

  useEffect(() => {
    setIsFetchingProducts(true);
    getProductsApi().then((res) => {
      const _product = res.data.find((item) => item.id == id);
      if(_product){
        setIsFetchingProducts(false);
        setProduct(_product);
      }
    });
  }, []);

  // Display the loading indicator to the user when API call is in progress
  if (isFetchingProducts) {
    return (
      <div className="m-5 d-flex justify-content-center align-items-center text-center">
        <div>
          <LoadingIndicator />
          <p className="mt-3">Loading products. Please wait...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container d-flex align-items-center">
      <div className="card-image " style={{ width: "40%" }}>
        <img
          src={require("../assets/images/products/" + product.productImage)}
          alt={product.productName}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="card-right" style={{ width: "60%" }}>
        <h5 className="item-title">{product.productName}</h5>
        {product.availableColor.includes(color) ? (
          <div
            className="my-2"
            style={{
              width: "28px",
              height: "28px",
              background: color,
              borderRadius: "50%",
            }}
          ></div>
        ) : (
          <p>{color} color is out of stock</p>
        )}
        <p className="item-price">
          <b>
            {product.availableColor.includes(color)
              ? `$ ${product.price + colorPrices[color]}`
              : "N/A"}
          </b>
        </p>
        <p className="item-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc
          mattis enim ut tellus elementum sagittis vitae. Mauris sit amet massa
          vitae tortor condimentum lacinia.
        </p>
        <br></br>
        <Link to={RouteDefinitions.ROUTE_PRODUCTS}>
          <Button variant="secondary">ADD TO CART</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
