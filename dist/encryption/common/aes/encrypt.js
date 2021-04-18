"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forge = require("node-forge");
const base64_1 = require("../base64");
const generateRandomSalt_1 = require("../generateRandomSalt");
function encrypt(data, key) {
    const iv = generateRandomSalt_1.default(12);
    const tagLength = 128;
    const cipher = forge.cipher.createCipher('AES-GCM', forge.util.createBuffer(forge.util.hexToBytes(key)));
    cipher.start({
        iv,
        tagLength,
    });
    cipher.update(forge.util.createBuffer(data));
    cipher.finish();
    return Promise.resolve({
        kty: 'AES',
        alg: 'AES-GCM-256',
        data: base64_1.default.encode(cipher.output.getBytes()),
        iv: base64_1.default.encode(iv),
        tag: base64_1.default.encode(cipher.mode.tag.getBytes()),
        tagLength,
    });
}
exports.default = encrypt;
//# sourceMappingURL=encrypt.js.map