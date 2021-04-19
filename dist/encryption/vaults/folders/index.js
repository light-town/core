"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const definitions = require("./definitions");
const encrypt_by_vault_key_1 = require("./encrypt-by-vault-key");
const decrypt_by_vault_key_1 = require("./decrypt-by-vault-key");
exports.default = {
    definitions,
    encryptVaultFolder: encrypt_by_vault_key_1.default,
    decryptVaultFolder: decrypt_by_vault_key_1.default,
};
//# sourceMappingURL=index.js.map