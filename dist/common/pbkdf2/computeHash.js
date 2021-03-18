"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeHash = void 0;
const sha256 = require("fast-sha256");
const computeHash = ({ uint8MasterPassword, encryptionKeySalt, iterations = 100000, }) => sha256.pbkdf2(uint8MasterPassword, encryptionKeySalt, iterations, 32);
exports.computeHash = computeHash;
exports.default = exports.computeHash;
//# sourceMappingURL=computeHash.js.map