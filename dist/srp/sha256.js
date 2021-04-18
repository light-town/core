"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forge = require("node-forge");
const bigNumber_1 = require("./bigNumber");
exports.default = (...args) => {
    const h = forge.md.sha256.create();
    for (const arg of args) {
        if (arg instanceof bigNumber_1.default) {
            h.update(arg.toHex());
        }
        else if (typeof arg === 'string') {
            h.update(arg);
        }
        else {
            throw new TypeError('Expected string or SRPInteger');
        }
    }
    return bigNumber_1.default.fromHex(h.digest().toHex());
};
//# sourceMappingURL=sha256.js.map