"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deriveSession = void 0;
const params_1 = require("../params");
const bigNumber_1 = require("../bigNumber");
const deriveSession = (clientSecretEphemeralKey, serverPublicEphemeralKey, salt, secretKey, privateKey) => {
    const a = bigNumber_1.default.fromHex(clientSecretEphemeralKey);
    const B = bigNumber_1.default.fromHex(serverPublicEphemeralKey);
    const s = bigNumber_1.default.fromHex(salt);
    const I = secretKey;
    const x = bigNumber_1.default.fromHex(privateKey);
    const A = params_1.g.modPow(a, params_1.N);
    if (B.mod(params_1.N).equals(bigNumber_1.default.ZERO)) {
        throw new Error('The server sent an invalid public ephemeral');
    }
    const u = params_1.H(A, B);
    const S = B.subtract(params_1.k.multiply(params_1.g.modPow(x, params_1.N))).modPow(a.add(u.multiply(x)), params_1.N);
    const K = params_1.H(S);
    const M = params_1.H(params_1.H(params_1.N).xor(params_1.H(params_1.g)), params_1.H(I), s, A, B, K);
    return {
        key: K.toHex(),
        proof: M.toHex(),
    };
};
exports.deriveSession = deriveSession;
exports.default = exports.deriveSession;
//# sourceMappingURL=deriveSession.js.map