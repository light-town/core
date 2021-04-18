"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forge = require("node-forge");
const base64_1 = require("../base64");
function decrypt(data, privateKey) {
    return Promise.resolve(privateKey.decrypt(base64_1.default.decode(data.data), 'RSA-OAEP', {
        md: forge.md.sha256.create(),
    }));
}
exports.default = decrypt;
//# sourceMappingURL=decrypt.js.map