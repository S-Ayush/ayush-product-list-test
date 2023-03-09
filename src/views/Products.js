import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LoadingIndicator from "../components/common/LoadingIndicator";
import Product from "../components/shopping/Product";
import { getProductsApi } from "../api/shopping";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isFetchingProducts, setIsFetchingProducts] = useState(true);

  useEffect(() => {
    setIsFetchingProducts(true);
    getProductsApi().then((res) => {
      setIsFetchingProducts(false);
      setProducts(res.data);
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
    <>
      <Container className="mt-5 mb-5">
        <div className="d-flex flex-justify-between p-2 background--cyan mb-3">
          <h3 className="mb-0">
            <strong>Products</strong>
          </h3>
        </div>
        <Row>
          {products ? (
            products.map((product) => (
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={3}
                className="mb-3"
                key={product.id}
              >
                <Product
                  id={product.id}
                  name={product.productName}
                  price={product.price}
                  image={product.productImage}
                  availableColor={product.availableColor}
                />
              </Col>
            ))
          ) : (
            <div>
              <p className="text-center p-5">No results found</p>
            </div>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Products;
