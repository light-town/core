"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deriveMasterUnlockKey = exports.ITERACTIONS = void 0;
const computeHash_1 = require("./pbkdf2/computeHash");
const hkdf_1 = require("./hkdf");
const forge = require("node-forge");
const base64_1 = require("./base64");
const generateRandomSalt_1 = require("./generateRandomSalt");
exports.ITERACTIONS = 100000;
const deriveMasterUnlockKey = (accountKey, normalizedMasterPassword, salt) => {
    const s = salt ? base64_1.default.decode(salt) : generateRandomSalt_1.default(32);
    const encryptSalt = hkdf_1.default.computeHKDF({
        secret: accountKey,
        salt: s,
    });
    const intermediateKey = hkdf_1.default.computeHKDF({
        secret: normalizedMasterPassword,
        salt: encryptSalt,
    });
    return {
        key: forge.util
            .createBuffer(computeHash_1.computeHash({
            secretKey: intermediateKey,
            salt: encryptSalt,
            iterations: exports.ITERACTIONS,
        }))
            .toHex(),
        iterations: exports.ITERACTIONS,
        salt: base64_1.default.encode(s),
    };
};
exports.deriveMasterUnlockKey = deriveMasterUnlockKey;
exports.default = exports.deriveMasterUnlockKey;
//# sourceMappingURL=deriveMasterUnlockKey.js.map