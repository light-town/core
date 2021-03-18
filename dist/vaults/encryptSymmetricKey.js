"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptSymmetricKey = exports.EncryptedSymmetricKey = exports.Options = void 0;
const forge = require("node-forge");
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
    const cipher = forge.cipher.createCipher('AES-GCM', forge.util.createBuffer(options.masterUnlockKey));
    cipher.start({
        iv,
        tagLength,
    });
    cipher.update(forge.util.createBuffer(options.symmetricKey));
    cipher.finish();
    const encryptedSymmetricKey = cipher.output;
    const encSymKey = {
        enc: 'A256GCM',
        tagLength,
        tag: forge.util.encode64(cipher.mode.tag.getBytes()),
        key: forge.util.encode64(encryptedSymmetricKey.getBytes()),
        iv: forge.util.bytesToHex(iv),
        iterations: options.iterations,
        salt: options.salt,
    };
    return encSymKey;
};
exports.encryptSymmetricKey = encryptSymmetricKey;
//# sourceMappingURL=encryptSymmetricKey.js.map