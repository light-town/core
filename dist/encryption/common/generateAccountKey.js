"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateCryptoRandomString_1 = require("./generateCryptoRandomString");
const toFormatKey = (key) => `${key.slice(0, 2)}-${key.slice(2, 8)}-${key.slice(8, 14)}-${key.slice(14, 19)}-${key.slice(19, 24)}-${key.slice(24, 29)}-${key.slice(29, 34)}`;
function generateAccountKey(versionCode, secret) {
    const trimmedUserId = secret.toUpperCase();
    const length = 34 - (versionCode.length + trimmedUserId.length);
    const randomString = generateCryptoRandomString_1.generateCryptoRandomString(length);
    const accountId = versionCode.concat(trimmedUserId, randomString);
    return toFormatKey(accountId);
}
exports.default = generateAccountKey;
//# sourceMappingURL=generateAccountKey.js.map