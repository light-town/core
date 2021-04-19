"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeHash = void 0;
const sha256 = require("fast-sha256");
const computeHash = ({ secretKey, salt, iterations }) => sha256.pbkdf2(secretKey, salt, iterations, 32);
exports.computeHash = computeHash;
exports.default = exports.computeHash;
//# sourceMappingURL=compute-hash.js.map