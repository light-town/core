"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyCertificate = void 0;
const forge = require("node-forge");
const verifyCertificate = (publicKey, signature, message, options = { encoding: 'utf8' }) => {
    return forge.pki.ed25519.verify({
        message,
        encoding: options.encoding,
        signature,
        publicKey,
    });
};
exports.verifyCertificate = verifyCertificate;
exports.default = exports.verifyCertificate;
//# sourceMappingURL=verifyCertificate.js.map