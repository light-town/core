"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = void 0;
const forge = require("node-forge");
const base64_1 = require("../../common/base64");
const decrypt = (data, privateKey) => {
    return Promise.resolve(privateKey.decrypt(base64_1.default.decode(data.data), 'RSA-OAEP', {
        md: forge.md.sha256.create(),
    }));
};
exports.decrypt = decrypt;
exports.default = exports.decrypt;
//# sourceMappingURL=decrypt.js.map