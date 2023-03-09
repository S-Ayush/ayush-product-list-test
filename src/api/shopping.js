import axios from "axios";

export const getProductsApi = () => {
  // API to fetch all the products
  const url = `/products.json`;
  return axios.get(url);
};
export const getProductById = (id) => {
  // API to fetch all the products
  const url = `/products.json/${id}`;
  return axios.get(url);
};
