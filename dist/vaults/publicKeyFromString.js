"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicKeyFromString = void 0;
const forge = require("node-forge");
const base64_1 = require("../common/base64");
const publicKeyFromString = (pem) => {
    return forge.pki.publicKeyFromPem(base64_1.default.decode(pem));
};
exports.publicKeyFromString = publicKeyFromString;
exports.default = exports.publicKeyFromString;
//# sourceMappingURL=publicKeyFromString.js.map