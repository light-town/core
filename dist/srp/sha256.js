"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forge = require("node-forge");
const big_number_1 = require("./big-number");
exports.default = (...args) => {
    const h = forge.md.sha256.create();
    for (const arg of args) {
        if (arg instanceof big_number_1.default) {
            h.update(arg.toHex());
        }
        else if (typeof arg === 'string') {
            h.update(arg);
        }
        else {
            throw new TypeError('Expected string or SRPInteger');
        }
    }
    return big_number_1.default.fromHex(h.digest().toHex());
};
//# sourceMappingURL=sha256.js.map