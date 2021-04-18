"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forge = require("node-forge");
function decode(bytes) {
    return forge.util.decode64(bytes);
}
exports.default = decode;
//# sourceMappingURL=decode.js.map