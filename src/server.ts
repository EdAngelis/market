import products from "./models/products.model";
import shoppingCart from "./models/cart.model";
import { total, printProducts, generateShopMessage } from "./controller/repo";
import {
  printDutiesNames,
  printPendentsDuties,
} from "./controller/duties.controller";

const mainMarket = () => {
  printProducts(products);
  generateShopMessage(shoppingCart, products);
  total(shoppingCart, products);
};

const mainDuties = () => {
  printPendentsDuties();
};

mainMarket();
mainDuties();
