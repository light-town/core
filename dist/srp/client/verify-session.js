"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifySession = void 0;
const params_1 = require("../params");
const big_number_1 = require("../big-number");
const verifySession = (clientPublicEphemeral, clientSession, serverSessionProof) => {
    const A = big_number_1.default.fromHex(clientPublicEphemeral);
    const M = big_number_1.default.fromHex(clientSession.proof);
    const K = big_number_1.default.fromHex(clientSession.key);
    const expected = params_1.H(A, M, K);
    const actual = big_number_1.default.fromHex(serverSessionProof);
    if (!actual.equals(expected)) {
        throw new Error('Server provided session proof is invalid');
    }
};
exports.verifySession = verifySession;
exports.default = exports.verifySession;
//# sourceMappingURL=verify-session.js.map