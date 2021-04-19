"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forge = require("node-forge");
const base64_1 = require("../../common/base64");
function decryptByPrivateKey(encryptedVaultKey, privateKey) {
    return Promise.resolve(privateKey.decrypt(base64_1.default.decode(encryptedVaultKey.key), 'RSA-OAEP', {
        md: forge.md.sha256.create(),
    }));
}
exports.default = decryptByPrivateKey;
//# sourceMappingURL=decrypt-by-private-key.js.map