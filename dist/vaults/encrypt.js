"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encrypt = exports.EncryptedData = void 0;
const forge = require("node-forge");
const base64_1 = require("../common/base64");
const common_1 = require("../common");
class EncryptedData {
}
exports.EncryptedData = EncryptedData;
const encrypt = (key, data) => {
    const iv = common_1.generateRandomSalt(12);
    const tagLength = 128;
    const cipher = forge.cipher.createCipher('AES-GCM', forge.util.createBuffer(forge.util.hexToBytes(key)));
    cipher.start({
        iv,
        tagLength,
    });
    cipher.update(forge.util.createBuffer(JSON.stringify(data)));
    cipher.finish();
    return Promise.resolve({
        kty: 'AES',
        alg: 'AES-GCM-256',
        data: base64_1.default.encode(cipher.output.getBytes()),
        iv: base64_1.default.encode(iv),
        tag: base64_1.default.encode(cipher.mode.tag.getBytes()),
        tagLength,
    });
};
exports.encrypt = encrypt;
exports.default = exports.encrypt;
//# sourceMappingURL=encrypt.js.map