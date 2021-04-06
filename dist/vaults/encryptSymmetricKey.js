"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptSymmetricKey = exports.EncryptedSymmetricKey = exports.Options = void 0;
const forge = require("node-forge");
const base64_1 = require("../common/base64");
const common_1 = require("../common");
class Options {
}
exports.Options = Options;
class EncryptedSymmetricKey {
}
exports.EncryptedSymmetricKey = EncryptedSymmetricKey;
const encryptSymmetricKey = (options) => {
    const iv = common_1.generateRandomSalt(12);
    const tagLength = 128;
    const cipher = forge.cipher.createCipher('AES-GCM', forge.util.createBuffer(forge.util.hexToBytes(options.secretKey)));
    cipher.start({
        iv,
        tagLength,
    });
    cipher.update(forge.util.createBuffer(options.symmetricKey));
    cipher.finish();
    return {
        kty: 'AES',
        alg: 'AES-GCM-256',
        tagLength,
        tag: base64_1.default.encode(cipher.mode.tag.getBytes()),
        key: base64_1.default.encode(cipher.output.getBytes()),
        iv: base64_1.default.encode(iv),
        salt: options.salt,
    };
};
exports.encryptSymmetricKey = encryptSymmetricKey;
//# sourceMappingURL=encryptSymmetricKey.js.map