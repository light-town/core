"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomSalt = void 0;
const cryptoRandomString = require("crypto-random-string");
const generateRandomSalt = (length) => {
    return cryptoRandomString({ length });
};
exports.generateRandomSalt = generateRandomSalt;
exports.default = exports.generateRandomSalt;
//# sourceMappingURL=generateRandomSalt.js.map