import { useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { colorPrices } from "../../utils";

const Product = ({ id, name, price, image, availableColor }) => {
  const [selectedColor, setSelectedColor] = useState(availableColor[0]);

  const getCalculatedPrice = () => {
    return price + colorPrices[selectedColor];
  };

  return (
    <Card className="p-2 product-card">
      <Card.Img
        variant="top"
        loading="lazy"
        title={name}
        src={require("../../assets/images/products/" + image)}
        alt={name || "product-image"}
        className="object-fit-cover"
      />

      <Card.Body>
        <div>
          <p className="mb-0">
            <span className="p-2"></span>
          </p>
        </div>

        <div className="mt-3 mb-2 flex-justify-between">
          <h6
            style={{ width: "60%" }}
            title={name}
            className="mb-0"
            data-testid="product-name"
          >
            {name || "NA"}
          </h6>
          <h5
            title={`${price} + ${colorPrices[selectedColor]}`}
            className="mb-0"
            data-testid="product-price"
          >
            $ {getCalculatedPrice() || "NA"}
          </h5>
        </div>

        {availableColor.length && (
          <small className="mb-0">
            <div className="d-flex gap-2 align-items-center">
              {availableColor.map((item) => (
                <div
                  style={{
                    width: selectedColor === item ? "28px" : "25px",
                    height: selectedColor === item ? "28px" : "25px",
                    background: item,
                    borderRadius: "50%",
                    boxShadow:
                      selectedColor === item
                        ? "0px 0px 6px 2px #28898f"
                        : "none",
                  }}
                  onClick={() => setSelectedColor(item)}
                ></div>
              ))}
            </div>
          </small>
        )}

        <div className="mt-4" style={{ textAlign: "center" }}>
          <Link to={`/product/${id}/${selectedColor}`}>
            <Button variant="secondary">GO TO PRODUCT</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
