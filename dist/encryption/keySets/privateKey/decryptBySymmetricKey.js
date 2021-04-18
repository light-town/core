"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forge = require("node-forge");
const base64_1 = require("../../common/base64");
function decryptBySymmetricKey(encryptedPrivateKey, symmetricKey) {
    return Promise.resolve(forge.pki.decryptRsaPrivateKey(base64_1.default.decode(encryptedPrivateKey.key), symmetricKey));
}
exports.default = decryptBySymmetricKey;
//# sourceMappingURL=decryptBySymmetricKey.js.map