"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encrypt = exports.EncryptedData = void 0;
const forge = require("node-forge");
const base64_1 = require("../../common/base64");
class EncryptedData {
}
exports.EncryptedData = EncryptedData;
const encrypt = (data, publicKey) => {
    const encryptedVaultKey = publicKey.encrypt(data, 'RSA-OAEP', {
        md: forge.md.sha256.create(),
    });
    return Promise.resolve({
        kty: 'RSA',
        alg: 'RSA-OAEP-256',
        data: base64_1.default.encode(encryptedVaultKey),
    });
};
exports.encrypt = encrypt;
exports.default = exports.encrypt;
//# sourceMappingURL=encrypt.js.map