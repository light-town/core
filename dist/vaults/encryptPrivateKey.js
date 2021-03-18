"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptPrivateKey = void 0;
const forge = require("node-forge");
const encryptPrivateKey = (privateKey, symmetricKey) => {
    const asn1PrivateKey = forge.pki.privateKeyToAsn1(privateKey);
    const encryptedPrivateKey = forge.pki.encryptPrivateKeyInfo(asn1PrivateKey, symmetricKey, {
        algorithm: 'aes256',
    });
    return {
        enc: 'A256GCM',
        key: forge.pki.encryptedPrivateKeyToPem(encryptedPrivateKey),
    };
};
exports.encryptPrivateKey = encryptPrivateKey;
//# sourceMappingURL=encryptPrivateKey.js.map