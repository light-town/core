"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genAccountKey = exports.toFormatKey = void 0;
const genCryptoRandomString_1 = require("./genCryptoRandomString");
const toFormatKey = (key) => `${key.slice(0, 2)}-${key.slice(2, 8)}-${key.slice(8, 14)}-${key.slice(14, 19)}-${key.slice(19, 24)}-${key.slice(24, 29)}-${key.slice(29, 34)}`;
exports.toFormatKey = toFormatKey;
const genAccountKey = ({ versionCode, userId }) => {
    const trimmedUserId = userId.replace('-', '').slice(0, 10).toUpperCase();
    const length = 34 - (versionCode.length + trimmedUserId.length);
    const randomString = genCryptoRandomString_1.genCryptoRandomString(length);
    const accountId = versionCode.concat(trimmedUserId, randomString);
    return exports.toFormatKey(accountId);
};
exports.genAccountKey = genAccountKey;
//# sourceMappingURL=genAccountKey.js.map