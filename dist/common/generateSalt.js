"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSalt = void 0;
const cryptoRandomString = require("crypto-random-string");
const generateSalt = () => {
    return cryptoRandomString({ length: 32 });
};
exports.generateSalt = generateSalt;
exports.default = exports.generateSalt;
//# sourceMappingURL=generateSalt.js.map