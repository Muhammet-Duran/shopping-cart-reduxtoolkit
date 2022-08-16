import { fetch } from "./fetch.js";

export const getProductList = async () => {
  const response = await fetch.get(`/products.json`);
  return response.data;
};
