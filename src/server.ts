import products from "./products";
import shoppingCart from "./shopping-cart";
import { total, printProducts, generateShopMessage } from "./repo";

const main = () => {
  total(shoppingCart, products);
};

main();
