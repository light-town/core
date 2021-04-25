"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forge = require("node-forge");
function decode(bytes) {
    return forge.util.decodeUtf8(bytes);
}
exports.default = decode;
//# sourceMappingURL=decode.js.map