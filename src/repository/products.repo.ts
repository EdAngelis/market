import { Product } from "../models";
import logger from "../tools/winston";
import products from "../models/products";

const findAll = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    logger.error(error);
    throw error;
  }
};

const createMany = async () => {
  try {
    const newProducts = await Product.insertMany(products);
    return newProducts;
  } catch (error) {
    logger.error(error);
    throw error;
  }
};

export { findAll, createMany };
