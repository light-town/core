"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aes_1 = require("../../common/aes");
function encryptByVaultKey(overview, vaultKey) {
    return aes_1.default.encrypt(JSON.stringify(overview), vaultKey);
}
exports.default = encryptByVaultKey;
//# sourceMappingURL=encrypt-by-vault-key.js.map