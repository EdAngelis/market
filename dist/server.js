"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("./models/products"));
const cart_model_1 = __importDefault(require("./models/cart.model"));
const repo_1 = require("./controller/repo");
const duties_controller_1 = require("./controller/duties.controller");
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
//connect();
const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server running on port ${chalkSuccess(port)}`);
// });
// process.on("unhandledRejection", (reason, promise) => {
//   console.log(
//     chalkError("Unhandled Rejection at:", promise, "reason:", reason)
//   );
//   // Application specific logging, throwing an error, or other logic here
// });
// app.on("error", (err) => {
//   console.log(chalkError("Express error:", err));
//   // Application specific logging, throwing an error, or other logic here
// });
// process.on("uncaughtException", (err) => {
//   console.log(chalkError("Uncaught Exception:", err));
//   // Application specific logging, throwing an error, or other logic here
// });
// process.on("SIGINT", () => {
//   logger.warn("SIGINT signal received.");
//   process.exit();
// });
// process.on("SIGTERM", () => {
//   logger.warn("SIGTERM signal received.");
//   process.exit();
// });
