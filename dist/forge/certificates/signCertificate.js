"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signCertificate = void 0;
const forge = require("node-forge");
const signCertificate = (privateKey, message, options = { encoding: 'utf8' }) => {
    return forge.pki.ed25519.sign({
        message,
        encoding: options.encoding,
        privateKey,
    });
};
exports.signCertificate = signCertificate;
exports.default = exports.signCertificate;
//# sourceMappingURL=signCertificate.js.map