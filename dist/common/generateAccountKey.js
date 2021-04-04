"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccountKey = exports.toFormatKey = void 0;
const generateCryptoRandomString_1 = require("./generateCryptoRandomString");
const toFormatKey = (key) => `${key.slice(0, 2)}-${key.slice(2, 8)}-${key.slice(8, 14)}-${key.slice(14, 19)}-${key.slice(19, 24)}-${key.slice(24, 29)}-${key.slice(29, 34)}`;
exports.toFormatKey = toFormatKey;
const generateAccountKey = (options) => {
    const trimmedUserId = options.secret.toUpperCase();
    const length = 34 - (options.versionCode.length + trimmedUserId.length);
    const randomString = generateCryptoRandomString_1.generateCryptoRandomString(length);
    const accountId = options.versionCode.concat(trimmedUserId, randomString);
    return exports.toFormatKey(accountId);
};
exports.generateAccountKey = generateAccountKey;
exports.default = exports.generateAccountKey;
//# sourceMappingURL=generateAccountKey.js.map