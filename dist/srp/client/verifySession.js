"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifySession = void 0;
const srp = require("secure-remote-password/client");
const verifySession = (clientPublicEphemeral, clientSession, serverSessionProof) => {
    srp.verifySession(clientPublicEphemeral, clientSession, serverSessionProof);
};
exports.verifySession = verifySession;
exports.default = exports.verifySession;
//# sourceMappingURL=verifySession.js.map