"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports.encode = void 0;
const encode_1 = require("./encode");
Object.defineProperty(exports, "encode", { enumerable: true, get: function () { return encode_1.encode; } });
const decode_1 = require("./decode");
Object.defineProperty(exports, "decode", { enumerable: true, get: function () { return decode_1.decode; } });
exports.default = {
    encode: encode_1.encode,
    decode: decode_1.decode,
};
//# sourceMappingURL=index.js.map