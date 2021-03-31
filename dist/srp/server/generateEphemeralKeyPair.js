"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEphemeralKeyPair = void 0;
const params_1 = require("../params");
const big_number_1 = require("../big-number");
const generateEphemeralKeyPair = (verifier) => {
    const v = big_number_1.default.fromHex(verifier);
    const b = big_number_1.default.randomInteger(256 / 8);
    const B = params_1.k.multiply(v).add(params_1.g.modPow(b, params_1.N)).mod(params_1.N);
    return {
        secret: b.toHex(),
        public: B.toHex(),
    };
};
exports.generateEphemeralKeyPair = generateEphemeralKeyPair;
exports.default = exports.generateEphemeralKeyPair;
//# sourceMappingURL=generateEphemeralKeyPair.js.map