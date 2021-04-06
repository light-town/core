"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = void 0;
const forge = require("node-forge");
const decode = (bytes) => {
    return forge.util.decode64(bytes);
};
exports.decode = decode;
exports.default = exports.decode;
//# sourceMappingURL=decode.js.map