import React from "react";
import NotFound from "../views/NotFound";
import ProductDetails from "../views/ProductDetails";
import Products from "../views/Products";
import RouteDefinitions from "./RouteDefinition";

const RouteList = [
  {
    path: RouteDefinitions.ROUTE_DEFAULT,
    element: <NotFound />,
  },
  {
    path: RouteDefinitions.ROUTE_HOME,
    element: <Products />,
  },
  {
    path: RouteDefinitions.ROUTE_PRODUCTS,
    element: <Products />,
  },
  {
    path: RouteDefinitions.ROUTE_PRODUCT_DETAILS,
    element: <ProductDetails />,
  },
];

export default RouteList;
