"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptVaultKey = exports.EncryptedVaultKey = void 0;
const forge = require("node-forge");
const base64_1 = require("../common/base64");
class EncryptedVaultKey {
}
exports.EncryptedVaultKey = EncryptedVaultKey;
const encryptVaultKey = (vaultKey, publicKey) => {
    const encryptedVaultKey = publicKey.encrypt(vaultKey, 'RSA-OAEP', {
        md: forge.md.sha256.create(),
    });
    return {
        kty: 'RSA',
        alg: 'RSA-OAEP-256',
        key: base64_1.default.encode(encryptedVaultKey),
    };
};
exports.encryptVaultKey = encryptVaultKey;
exports.default = exports.encryptVaultKey;
//# sourceMappingURL=encryptVaultKey.js.map