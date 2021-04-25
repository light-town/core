"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterUnlockKey = exports.deriveMasterUnlockKey = exports.normalizeMasterPassword = exports.generateRandomSalt = exports.generateCryptoRandomString = exports.generateAccountKey = exports.rsa = exports.utf8 = exports.base64 = exports.pbkdf2 = exports.hkdf = void 0;
const generate_crypto_random_string_1 = require("./generate-crypto-random-string");
exports.generateCryptoRandomString = generate_crypto_random_string_1.default;
const generate_account_key_1 = require("./generate-account-key");
exports.generateAccountKey = generate_account_key_1.default;
const generate_random_salt_1 = require("./generate-random-salt");
exports.generateRandomSalt = generate_random_salt_1.default;
const normalize_master_password_1 = require("./normalize-master-password");
exports.normalizeMasterPassword = normalize_master_password_1.default;
const derive_master_unlock_key_1 = require("./derive-master-unlock-key");
exports.deriveMasterUnlockKey = derive_master_unlock_key_1.default;
Object.defineProperty(exports, "MasterUnlockKey", { enumerable: true, get: function () { return derive_master_unlock_key_1.MasterUnlockKey; } });
const pbkdf2_1 = require("./pbkdf2");
exports.pbkdf2 = pbkdf2_1.default;
const hkdf_1 = require("./hkdf");
exports.hkdf = hkdf_1.default;
const base64_1 = require("./base64");
exports.base64 = base64_1.default;
const utf_8_1 = require("./utf-8");
exports.utf8 = utf_8_1.default;
const rsa_1 = require("./rsa");
exports.rsa = rsa_1.default;
exports.default = {
    hkdf: hkdf_1.default,
    pbkdf2: pbkdf2_1.default,
    base64: base64_1.default,
    utf8: utf_8_1.default,
    rsa: rsa_1.default,
    generateAccountKey: generate_account_key_1.default,
    generateCryptoRandomString: generate_crypto_random_string_1.default,
    generateRandomSalt: generate_random_salt_1.default,
    normalizeMasterPassword: normalize_master_password_1.default,
    deriveMasterUnlockKey: derive_master_unlock_key_1.default,
    MasterUnlockKey: derive_master_unlock_key_1.MasterUnlockKey,
};
//# sourceMappingURL=index.js.map