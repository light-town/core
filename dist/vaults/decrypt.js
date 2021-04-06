"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.retrieveBufferFromBase64 = void 0;
const forge = require("node-forge");
const retrieveBufferFromBase64 = (base64Value) => forge.util.createBuffer(forge.util.decode64(base64Value));
exports.retrieveBufferFromBase64 = retrieveBufferFromBase64;
const decrypt = (key, data) => {
    const encryptionKey = forge.util.createBuffer(forge.util.hexToBytes(key));
    const decipher = forge.cipher.createDecipher('AES-GCM', encryptionKey);
    decipher.start({
        iv: forge.util.hexToBytes(data.iv),
        tagLength: data.tagLength,
        tag: exports.retrieveBufferFromBase64(data.tag),
    });
    decipher.update(exports.retrieveBufferFromBase64(data.data));
    const pass = decipher.finish();
    if (pass) {
        const decryptedData = JSON.parse(decipher.output.getBytes());
        return Promise.resolve(decryptedData);
    }
    return Promise.reject(new Error(`Fail to decrypt data`));
};
exports.decrypt = decrypt;
exports.default = exports.decrypt;
//# sourceMappingURL=decrypt.js.map