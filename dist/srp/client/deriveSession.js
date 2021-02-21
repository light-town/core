"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deriveSession = void 0;
const srp = require("secure-remote-password/client");
const deriveSession = (salt, secretKey, password, clientSecretEphemeral, serverPublicEphemeral) => {
    const privateKey = srp.derivePrivateKey(salt, secretKey, password);
    return srp.deriveSession(clientSecretEphemeral, serverPublicEphemeral, salt, secretKey, privateKey);
};
exports.deriveSession = deriveSession;
exports.default = exports.deriveSession;
//# sourceMappingURL=deriveSession.js.map