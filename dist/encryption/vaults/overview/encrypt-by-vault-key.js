"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aes_1 = require("../../common/aes");
const utf_8_1 = require("../../common/utf-8");
function encryptByVaultKey(overview, vaultKey) {
    return aes_1.default.encrypt(utf_8_1.default.encode(JSON.stringify(overview)), vaultKey);
}
exports.default = encryptByVaultKey;
//# sourceMappingURL=encrypt-by-vault-key.js.map