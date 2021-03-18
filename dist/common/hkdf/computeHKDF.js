"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeHKDF = void 0;
const hkdf = require("js-crypto-hkdf");
const computeHKDF = ({ uint8MasterSecret, uint8Salt }) => hkdf
    .compute(uint8MasterSecret, 'SHA-256', 32, '', uint8Salt)
    .then((derived) => derived.key);
exports.computeHKDF = computeHKDF;
exports.default = exports.computeHKDF;
//# sourceMappingURL=computeHKDF.js.map