"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.derivePrivateKey = void 0;
const params_1 = require("../params");
const derivePrivateKey = (secretKey, password, salt) => {
    const s = salt;
    const I = secretKey;
    const p = password;
    return params_1.H(s, params_1.H(`${I}:${p}`)).toHex();
};
exports.derivePrivateKey = derivePrivateKey;
//# sourceMappingURL=derive-private-key.js.map