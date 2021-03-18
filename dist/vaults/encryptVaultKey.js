"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptVaultKey = exports.EncryptedVaultKey = void 0;
const forge = require("node-forge");
class EncryptedVaultKey {
}
exports.EncryptedVaultKey = EncryptedVaultKey;
const encryptVaultKey = (vaultKey, publicKey) => {
    const encryptedVaultKey = publicKey.encrypt(vaultKey, 'RSA-OAEP', {
        md: forge.md.sha256.create(),
    });
    return {
        alg: 'RSA-OAEP-256',
        kty: 'RSA',
        key: forge.util.encode64(encryptedVaultKey),
    };
};
exports.encryptVaultKey = encryptVaultKey;
exports.default = exports.encryptVaultKey;
//# sourceMappingURL=encryptVaultKey.js.map