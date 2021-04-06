"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptVaultKey = void 0;
const forge = require("node-forge");
const base64_1 = require("../common/base64");
const decryptVaultKey = (encryptedVaultKey, privateKey) => {
    return privateKey.decrypt(base64_1.default.decode(encryptedVaultKey), 'RSA-OAEP', {
        md: forge.md.sha256.create(),
    });
};
exports.decryptVaultKey = decryptVaultKey;
//# sourceMappingURL=decryptVaultKey.js.map