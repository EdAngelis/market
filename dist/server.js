"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("./tools/chalk");
const winston_1 = __importDefault(require("./tools/winston"));
const products_1 = __importDefault(require("./models/products"));
const cart_model_1 = __importDefault(require("./models/cart.model"));
const repo_1 = require("./controller/repo");
const duties_controller_1 = require("./controller/duties.controller");
const app_1 = __importDefault(require("./app"));
const mainMarket = () => {
    (0, repo_1.printProducts)(products_1.default);
    (0, repo_1.generateShopMessage)(cart_model_1.default, products_1.default);
    (0, repo_1.total)(cart_model_1.default, products_1.default);
};
const mainDuties = () => {
    (0, duties_controller_1.printPendentsDuties)();
};
mainMarket();
mainDuties();
const port = process.env.PORT || 3000;
app_1.default.listen(port, () => {
    console.log((0, chalk_1.chalkSuccess)(`Server running on port ${port}`));
    winston_1.default.info((0, chalk_1.chalkSuccess)(`Server running on port ${port}`));
});
