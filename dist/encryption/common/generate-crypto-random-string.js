"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCryptoRandomString = void 0;
const forge = require("node-forge");
const generateCryptoRandomString = (length) => forge.util.bytesToHex(forge.random.getBytesSync(length)).toUpperCase();
exports.generateCryptoRandomString = generateCryptoRandomString;
exports.default = exports.generateCryptoRandomString;
//# sourceMappingURL=generate-crypto-random-string.js.map