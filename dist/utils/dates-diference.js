"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dateDiference = (firstDate, secondDate, inDays = true) => {
    const diference = Math.abs(secondDate.getTime() - firstDate.getTime());
    if (inDays) {
        return Math.ceil(diference / (1000 * 3600 * 24));
    }
    else {
        return diference;
    }
};
exports.default = dateDiference;
