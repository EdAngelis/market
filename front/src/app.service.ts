import api from "./service/api";
import IBuyer from "./models/buyer.model";

const getProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

const getBuyer = async () => {
  const response = await api.get("/buyers");
  return response.data.data[0];
};

const updateCart = async (buyer: IBuyer) => {
  const response = await api.put(`/buyers/${buyer._id}`, buyer.cart);
  return response.data;
};

export { getProducts, getBuyer, updateCart };
