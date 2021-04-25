"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forge = require("node-forge");
function encode(bytes) {
    return forge.util.encodeUtf8(bytes);
}
exports.default = encode;
//# sourceMappingURL=encode.js.map