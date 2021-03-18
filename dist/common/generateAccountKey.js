"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccountKey = exports.toFormatKey = void 0;
const generateCryptoRandomString_1 = require("./generateCryptoRandomString");
const toFormatKey = (key) => `${key.slice(0, 2)}-${key.slice(2, 8)}-${key.slice(8, 14)}-${key.slice(14, 19)}-${key.slice(19, 24)}-${key.slice(24, 29)}-${key.slice(29, 34)}`;
exports.toFormatKey = toFormatKey;
const generateAccountKey = ({ versionCode, userId }) => {
    const trimmedUserId = userId.replace('-', '').slice(0, 10).toUpperCase();
    const length = 34 - (versionCode.length + trimmedUserId.length);
    const randomString = generateCryptoRandomString_1.generateCryptoRandomString(length);
    const accountId = versionCode.concat(trimmedUserId, randomString);
    return exports.toFormatKey(accountId);
};
exports.generateAccountKey = generateAccountKey;
//# sourceMappingURL=generateAccountKey.js.map