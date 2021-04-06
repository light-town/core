"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptVaultMetadata = void 0;
const encrypt_1 = require("./encrypt");
const encryptVaultMetadata = (vaultKey, metadata) => {
    return encrypt_1.default(vaultKey, metadata);
};
exports.encryptVaultMetadata = encryptVaultMetadata;
exports.default = exports.encryptVaultMetadata;
//# sourceMappingURL=encryptVaultMetadata.js.map