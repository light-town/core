"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deriveVerifier = void 0;
const srp = require("secure-remote-password/client");
const common_1 = require("../../common");
const deriveVerifier = (secretKey, password) => {
    const salt = common_1.generateRandomSalt(32);
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