"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicKeyFromString = void 0;
const forge = require("node-forge");
const publicKeyFromString = (pem) => {
    return forge.pki.publicKeyFromPem(pem);
};
exports.publicKeyFromString = publicKeyFromString;
exports.default = exports.publicKeyFromString;
//# sourceMappingURL=publicKeyFromString.js.map