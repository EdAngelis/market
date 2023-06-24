"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateShopMessage = exports.total = exports.printProducts = void 0;
const printProducts = (products, category = null) => {
    const nameAndCod = products.map((product) => {
        return { name: product.name, cod: product.cod };
    });
    console.log(nameAndCod);
};
exports.printProducts = printProducts;
const total = (shop, products) => {
    let total = 0;
    shop.forEach((product) => {
        var _a;
        const price = (_a = products.find((p) => p.cod === product.cod)) === null || _a === void 0 ? void 0 : _a.price;
        total += product.qt * price;
    });
    console.log("");
    console.log(`   Total da Compra R$ ${total.toFixed(2)}`);
};
exports.total = total;
const generateShopMessage = (shop, products) => {
    shop.forEach((product) => {
        const item = products.find((p) => p.cod === product.cod);
        console.log(` ${item === null || item === void 0 ? void 0 : item.name} ${item === null || item === void 0 ? void 0 : item.marca} ${(item === null || item === void 0 ? void 0 : item.characteristic) || ""} ${(item === null || item === void 0 ? void 0 : item.size) || ""} - ${product.qt} ${item === null || item === void 0 ? void 0 : item.unit}`);
    });
};
exports.generateShopMessage = generateShopMessage;
