"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genSalt = void 0;
const cryptoRandomString = require("crypto-random-string");
const genSalt = () => {
    return cryptoRandomString({ length: 8 });
};
exports.genSalt = genSalt;
exports.default = exports.genSalt;
//# sourceMappingURL=genSalt.js.map