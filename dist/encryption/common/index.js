"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterUnlockKey = exports.deriveMasterUnlockKey = exports.normalizeMasterPassword = exports.generateRandomSalt = exports.generateCryptoRandomString = exports.generateAccountKey = exports.rsa = exports.base64 = exports.pbkdf2 = exports.hkdf = void 0;
const generateCryptoRandomString_1 = require("./generateCryptoRandomString");
exports.generateCryptoRandomString = generateCryptoRandomString_1.default;
const generateAccountKey_1 = require("./generateAccountKey");
exports.generateAccountKey = generateAccountKey_1.default;
const generateRandomSalt_1 = require("./generateRandomSalt");
exports.generateRandomSalt = generateRandomSalt_1.default;
const normalizeMasterPassword_1 = require("./normalizeMasterPassword");
exports.normalizeMasterPassword = normalizeMasterPassword_1.default;
const deriveMasterUnlockKey_1 = require("./deriveMasterUnlockKey");
exports.deriveMasterUnlockKey = deriveMasterUnlockKey_1.default;
Object.defineProperty(exports, "MasterUnlockKey", { enumerable: true, get: function () { return deriveMasterUnlockKey_1.MasterUnlockKey; } });
const pbkdf2_1 = require("./pbkdf2");
exports.pbkdf2 = pbkdf2_1.default;
const hkdf_1 = require("./hkdf");
exports.hkdf = hkdf_1.default;
const base64_1 = require("./base64");
exports.base64 = base64_1.default;
const rsa_1 = require("./rsa");
exports.rsa = rsa_1.default;
exports.default = {
    hkdf: hkdf_1.default,
    pbkdf2: pbkdf2_1.default,
    base64: base64_1.default,
    rsa: rsa_1.default,
    generateAccountKey: generateAccountKey_1.default,
    generateCryptoRandomString: generateCryptoRandomString_1.default,
    generateRandomSalt: generateRandomSalt_1.default,
    normalizeMasterPassword: normalizeMasterPassword_1.default,
    deriveMasterUnlockKey: deriveMasterUnlockKey_1.default,
    MasterUnlockKey: deriveMasterUnlockKey_1.MasterUnlockKey,
};
//# sourceMappingURL=index.js.map