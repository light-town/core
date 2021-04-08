"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptByPrivateKey = void 0;
const forge = require("node-forge");
const base64_1 = require("../../common/base64");
const decryptByPrivateKey = (encryptedVaultKey, privateKey) => {
    return Promise.resolve(privateKey.decrypt(base64_1.default.decode(encryptedVaultKey.key), 'RSA-OAEP', {
        md: forge.md.sha256.create(),
    }));
};
exports.decryptByPrivateKey = decryptByPrivateKey;
exports.default = exports.decryptByPrivateKey;
//# sourceMappingURL=decryptByPrivateKey.js.map