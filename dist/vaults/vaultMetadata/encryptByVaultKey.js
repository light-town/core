"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptByVaultKey = void 0;
const encrypt_1 = require("../../common/aes/encrypt");
const encryptByVaultKey = (metadata, vaultKey) => {
    return encrypt_1.default(JSON.stringify(metadata), vaultKey);
};
exports.encryptByVaultKey = encryptByVaultKey;
exports.default = exports.encryptByVaultKey;
//# sourceMappingURL=encryptByVaultKey.js.map