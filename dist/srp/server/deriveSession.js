"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deriveSession = void 0;
const params_1 = require("../params");
const big_number_1 = require("../big-number");
const deriveSession = (serverSecretEphemeralKey, clientPublicEphemeralKey, salt, secretKey, verifier, clientSessionProofKey) => {
    const b = big_number_1.default.fromHex(serverSecretEphemeralKey);
    const A = big_number_1.default.fromHex(clientPublicEphemeralKey);
    const s = big_number_1.default.fromHex(salt);
    const I = secretKey;
    const v = big_number_1.default.fromHex(verifier);
    const B = params_1.k.multiply(v).add(params_1.g.modPow(b, params_1.N)).mod(params_1.N);
    if (A.mod(params_1.N).equals(big_number_1.default.ZERO)) {
        throw new Error('The client sent an invalid public ephemeral');
    }
    const u = params_1.H(A, B);
    const S = A.multiply(v.modPow(u, params_1.N)).modPow(b, params_1.N);
    const K = params_1.H(S);
    const M = params_1.H(params_1.H(params_1.N).xor(params_1.H(params_1.g)), params_1.H(I), s, A, B, K);
    const expected = M;
    const actual = big_number_1.default.fromHex(clientSessionProofKey);
    if (!actual.equals(expected)) {
        throw new Error('Client provided session proof is invalid');
    }
    const P = params_1.H(A, M, K);
    return {
        key: K.toHex(),
        proof: P.toHex(),
    };
};
exports.deriveSession = deriveSession;
exports.default = exports.deriveSession;
//# sourceMappingURL=deriveSession.js.map