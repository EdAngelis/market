"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("./products"));
const main = () => {
    const nameAndCod = products_1.default.map((product) => {
        return { name: product.name, cod: product.cod };
    });
    console.log(nameAndCod);
};
main();
