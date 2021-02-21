"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deriveSession = void 0;
const srp = require("secure-remote-password/server");
const deriveSession = (serverSecretEphemeral, clientPublicEphemeral, salt, secretKey, verifier, clientSessionProof) => {
    return srp.deriveSession(serverSecretEphemeral, clientPublicEphemeral, salt, secretKey, verifier, clientSessionProof);
};
exports.deriveSession = deriveSession;
exports.default = exports.deriveSession;
//# sourceMappingURL=deriveSession.js.map