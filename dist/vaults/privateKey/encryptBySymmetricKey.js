"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptBySymmetricKey = exports.EncryptedPrivateKey = void 0;
const forge = require("node-forge");
const base64_1 = require("../../common/base64");
class EncryptedPrivateKey {
}
exports.EncryptedPrivateKey = EncryptedPrivateKey;
const encryptBySymmetricKey = (privateKey, symmetricKey) => {
    const asn1PrivateKey = forge.pki.privateKeyToAsn1(privateKey);
    const encryptedPrivateKey = forge.pki.encryptPrivateKeyInfo(asn1PrivateKey, symmetricKey, {
        algorithm: 'aes256',
    });
    return Promise.resolve({
        kty: 'AES',
        alg: 'AES-GCM-256',
        key: base64_1.default.encode(forge.pki.encryptedPrivateKeyToPem(encryptedPrivateKey)),
    });
};
exports.encryptBySymmetricKey = encryptBySymmetricKey;
exports.default = exports.encryptBySymmetricKey;
//# sourceMappingURL=encryptBySymmetricKey.js.map