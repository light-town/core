"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEphemeralKeyPair = void 0;
const params_1 = require("../params");
const bigNumber_1 = require("../bigNumber");
const generateEphemeralKeyPair = () => {
    const a = bigNumber_1.default.randomInteger(256 / 8);
    const A = params_1.g.modPow(a, params_1.N);
    return {
        secret: a.toHex(),
        public: A.toHex(),
    };
};
exports.generateEphemeralKeyPair = generateEphemeralKeyPair;
exports.default = exports.generateEphemeralKeyPair;
//# sourceMappingURL=generateEphemeralKeyPair.js.map