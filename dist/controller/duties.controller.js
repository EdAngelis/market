"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printPendentsDuties = exports.printDutiesNames = void 0;
const index_1 = require("../models/index");
const index_2 = require("../utils/index");
const printDutiesNames = () => {
    index_1.Duties.forEach((duty) => {
        console.log(duty.name);
    });
};
exports.printDutiesNames = printDutiesNames;
const printPendentsDuties = () => {
    var _a, _b, _c;
    console.log("******************");
    console.log("Pendents Duties:");
    console.log("");
    console.log("********************************************");
    for (let duty of index_1.Duties) {
        const dutyFrequenceDays = duty.frequencyDays;
        const arraySize = (_b = (_a = duty.executionHistory) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
        const daysSinceLastExecution = ((_c = duty.executionHistory) === null || _c === void 0 ? void 0 : _c.length)
            ? (0, index_2.datesInterval)(new Date(), duty.executionHistory[arraySize - 1].date)
            : 199;
        if (daysSinceLastExecution > dutyFrequenceDays) {
            console.log(`${duty.name} ${daysSinceLastExecution - dutyFrequenceDays} Days Pendents`);
        }
    }
    console.log("");
    console.log("********************************************");
    console.log("");
};
exports.printPendentsDuties = printPendentsDuties;
