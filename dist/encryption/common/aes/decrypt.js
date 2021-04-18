"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forge = require("node-forge");
const base64_1 = require("../base64");
function retrieveBufferFromBase64(base64Value) {
    return forge.util.createBuffer(forge.util.decode64(base64Value));
}
function decrypt(data, key) {
    const encryptionKey = forge.util.createBuffer(forge.util.hexToBytes(key));
    const decipher = forge.cipher.createDecipher('AES-GCM', encryptionKey);
    decipher.start({
        iv: base64_1.default.decode(data.iv),
        tagLength: data.tagLength,
        tag: retrieveBufferFromBase64(data.tag),
    });
    decipher.update(retrieveBufferFromBase64(data.data));
    const pass = decipher.finish();
    if (pass) {
        const decryptedData = decipher.output.getBytes();
        return Promise.resolve(decryptedData);
    }
    return Promise.reject(new Error(`Fail to decrypt data`));
}
exports.default = decrypt;
//# sourceMappingURL=decrypt.js.map