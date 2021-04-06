"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptVaultMetadata = void 0;
const decrypt_1 = require("./decrypt");
const decryptVaultMetadata = (vaultKey, metadata) => {
    return decrypt_1.default(vaultKey, metadata);
};
exports.decryptVaultMetadata = decryptVaultMetadata;
exports.default = exports.decryptVaultMetadata;
//# sourceMappingURL=decryptVaultMetadata.js.map