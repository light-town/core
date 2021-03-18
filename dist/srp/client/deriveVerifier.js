"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deriveVerifier = void 0;
const srp = require("secure-remote-password/client");
const genSalt_1 = require("~/common/genSalt");
const deriveVerifier = (secretKey, password) => {
    const salt = genSalt_1.genSalt();
    const privateKey = srp.derivePrivateKey(salt, secretKey, password);
    const verifier = srp.deriveVerifier(privateKey);
    return {
        verifier,
        salt,
        privateKey,
    };
};
exports.deriveVerifier = deriveVerifier;
exports.default = exports.deriveVerifier;
//# sourceMappingURL=deriveVerifier.js.map