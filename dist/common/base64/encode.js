"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encode = void 0;
const forge = require("node-forge");
const encode = (bytes) => {
    return forge.util.encode64(bytes);
};
exports.encode = encode;
exports.default = exports.encode;
//# sourceMappingURL=encode.js.map