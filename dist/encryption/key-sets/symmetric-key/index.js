"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const definitions = require("./definitions");
const encrypt_by_public_key_1 = require("./encrypt-by-public-key");
const decrypt_by_private_key_1 = require("./decrypt-by-private-key");
const encrypt_by_secret_key_1 = require("./encrypt-by-secret-key");
const decrypt_by_secret_key_1 = require("./decrypt-by-secret-key");
exports.default = {
    definitions,
    encryptByPublicKey: encrypt_by_public_key_1.default,
    decryptByPrivateKey: decrypt_by_private_key_1.default,
    encryptBySecretKey: encrypt_by_secret_key_1.default,
    decryptBySecretKey: decrypt_by_secret_key_1.default,
};
//# sourceMappingURL=index.js.map