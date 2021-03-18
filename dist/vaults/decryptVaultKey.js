"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptVaultKey = void 0;
const forge = require("node-forge");
const decryptVaultKey = (encryptedVaultKey, privateKey) => {
    const decodedKey = forge.util.decode64(encryptedVaultKey);
    return privateKey.decrypt(decodedKey, 'RSA-OAEP', {
        md: forge.md.sha256.create(),
    });
};
exports.decryptVaultKey = decryptVaultKey;
//# sourceMappingURL=decryptVaultKey.js.map