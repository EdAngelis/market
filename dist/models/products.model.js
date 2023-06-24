"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    cod: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    unit: { type: String, required: true },
    badge: { type: String },
    price: { type: Number, required: true },
    characteristic: { type: String },
    description: { type: String },
    image: { type: String },
    category: { type: String, required: true },
});
exports.default = (0, mongoose_1.model)("Products", schema);
