"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptBySymmetricKey = void 0;
const forge = require("node-forge");
const base64_1 = require("../../common/base64");
const decryptBySymmetricKey = (encryptedPrivateKey, symmetricKey) => {
    return Promise.resolve(forge.pki.decryptRsaPrivateKey(base64_1.default.decode(encryptedPrivateKey.key), symmetricKey));
};
exports.decryptBySymmetricKey = decryptBySymmetricKey;
exports.default = exports.decryptBySymmetricKey;
//# sourceMappingURL=decryptBySymmetricKey.js.map