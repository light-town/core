"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genCryptoRandomString = void 0;
const cryptoRandomString = require("crypto-random-string");
const genCryptoRandomString = (length) => cryptoRandomString({ length, characters: 'ABCDEFGHJKLMNPQRSTVWXYZ23456789' });
exports.genCryptoRandomString = genCryptoRandomString;
exports.default = exports.genCryptoRandomString;
//# sourceMappingURL=genCryptoRandomString.js.map