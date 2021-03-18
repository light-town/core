"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptPrivateKey = void 0;
const forge = require("node-forge");
const decryptPrivateKey = (encryptedPrivateKey, symmetricKey) => {
    return forge.pki.decryptRsaPrivateKey(encryptedPrivateKey, symmetricKey);
};
exports.decryptPrivateKey = decryptPrivateKey;
exports.default = exports.decryptPrivateKey;
//# sourceMappingURL=decryptPrivateKey.js.map