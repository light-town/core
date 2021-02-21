"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deriveVerifier = void 0;
const srp = require("secure-remote-password/client");
const deriveVerifier = (secretKey, password) => {
    const salt = srp.generateSalt();
    const privateKey = srp.derivePrivateKey(salt, secretKey, password);
    const verifier = srp.deriveVerifier(privateKey);
    return {
        verifier,
        salt,
    };
};
exports.deriveVerifier = deriveVerifier;
exports.default = exports.deriveVerifier;
//# sourceMappingURL=deriveVerifier.js.map