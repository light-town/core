"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deriveMasterUnlockKey = void 0;
const computeHash_1 = require("./pbkdf2/computeHash");
const hkdf_1 = require("./hkdf");
const forge = require("node-forge");
const ITERACTIONS = 100000;
const deriveMasterUnlockKey = (accountKey, normalizedMasterPassword, salt) => {
    const encryptSalt = hkdf_1.default.computeHKDF({
        secret: accountKey,
        salt,
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
            iterations: ITERACTIONS,
        }))
            .toHex(),
        iterations: ITERACTIONS,
        salt,
    };
};
exports.deriveMasterUnlockKey = deriveMasterUnlockKey;
exports.default = exports.deriveMasterUnlockKey;
//# sourceMappingURL=deriveMasterUnlockKey.js.map