"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCryptoRandomString = void 0;
const cryptoRandomString = require("crypto-random-string");
const generateCryptoRandomString = (length) => cryptoRandomString({ length, characters: 'ABCDEFGHJKLMNPQRSTVWXYZ23456789' });
exports.generateCryptoRandomString = generateCryptoRandomString;
exports.default = exports.generateCryptoRandomString;
//# sourceMappingURL=generateCryptoRandomString.js.map