"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptPrivateKey = void 0;
const forge = require("node-forge");
const base64_1 = require("../common/base64");
const decryptPrivateKey = (encryptedPrivateKey, symmetricKey) => {
    return forge.pki.decryptRsaPrivateKey(base64_1.default.decode(encryptedPrivateKey), symmetricKey);
};
exports.decryptPrivateKey = decryptPrivateKey;
exports.default = exports.decryptPrivateKey;
//# sourceMappingURL=decryptPrivateKey.js.map