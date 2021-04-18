"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeHKDF = void 0;
const forge = require("node-forge");
const computeHKDF = ({ secret, salt }) => {
    const hmac = forge.hmac.create();
    hmac.start('sha256', secret);
    hmac.update(salt);
    return hmac.digest().toHex();
};
exports.computeHKDF = computeHKDF;
exports.default = exports.computeHKDF;
//# sourceMappingURL=computeHKDF.js.map