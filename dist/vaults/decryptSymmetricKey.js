"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptSymmetricKey = exports.retrieveBufferFromBase64 = exports.Options = void 0;
const forge = require("node-forge");
class Options {
}
exports.Options = Options;
const retrieveBufferFromBase64 = (base64Value) => forge.util.createBuffer(forge.util.decode64(base64Value));
exports.retrieveBufferFromBase64 = retrieveBufferFromBase64;
const decryptSymmetricKey = (options) => {
    const key = forge.util.createBuffer(options.masterUnlockKey);
    const decipher = forge.cipher.createDecipher('AES-GCM', key);
    decipher.start({
        iv: forge.util.hexToBytes(options.iv),
        tagLength: options.tagLength,
        tag: exports.retrieveBufferFromBase64(options.tag),
    });
    decipher.update(exports.retrieveBufferFromBase64(options.encryptedSymmetricKey));
    const pass = decipher.finish();
    if (pass) {
        const decryptedSymmetricKey = decipher.output.getBytes();
        return Promise.resolve(decryptedSymmetricKey);
    }
    return Promise.reject(new Error(`Fail to decrypt symmetric key`));
};
exports.decryptSymmetricKey = decryptSymmetricKey;
//# sourceMappingURL=decryptSymmetricKey.js.map