"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_model_1 = __importDefault(require("./models/products.model"));
const cart_model_1 = __importDefault(require("./models/cart.model"));
const repo_1 = require("./controller/repo");
const duties_controller_1 = require("./controller/duties.controller");
const mainMarket = () => {
    (0, repo_1.printProducts)(products_model_1.default);
    (0, repo_1.generateShopMessage)(cart_model_1.default, products_model_1.default);
    (0, repo_1.total)(cart_model_1.default, products_model_1.default);
};
const mainDuties = () => {
    (0, duties_controller_1.printPendentsDuties)();
};
mainMarket();
mainDuties();
