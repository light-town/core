"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicKeyToString = void 0;
const forge = require("node-forge");
const publicKeyToString = (publicKey) => {
    return forge.pki.publicKeyToPem(publicKey);
};
exports.publicKeyToString = publicKeyToString;
exports.default = exports.publicKeyToString;
//# sourceMappingURL=publicKeyToString.js.map