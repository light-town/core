"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicKeyToString = void 0;
const forge = require("node-forge");
const base64_1 = require("../common/base64");
const publicKeyToString = (publicKey) => {
    return base64_1.default.encode(forge.pki.publicKeyToPem(publicKey));
};
exports.publicKeyToString = publicKeyToString;
exports.default = exports.publicKeyToString;
//# sourceMappingURL=publicKeyToString.js.map