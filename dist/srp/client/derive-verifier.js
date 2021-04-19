"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deriveVerifier = void 0;
const params_1 = require("../params");
const big_number_1 = require("../big-number");
const deriveVerifier = (privateKey) => {
    const x = big_number_1.default.fromHex(privateKey);
    const v = params_1.g.modPow(x, params_1.N);
    return v.toHex();
};
exports.deriveVerifier = deriveVerifier;
exports.default = exports.deriveVerifier;
//# sourceMappingURL=derive-verifier.js.map