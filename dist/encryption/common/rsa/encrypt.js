"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forge = require("node-forge");
const base64_1 = require("../base64");
function encrypt(data, publicKey) {
    const encryptedVaultKey = publicKey.encrypt(data, 'RSA-OAEP', {
        md: forge.md.sha256.create(),
    });
    return Promise.resolve({
        kty: 'RSA',
        alg: 'RSA-OAEP-256',
        data: base64_1.default.encode(encryptedVaultKey),
    });
}
exports.default = encrypt;
//# sourceMappingURL=encrypt.js.map