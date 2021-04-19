"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomSalt = void 0;
const forge = require("node-forge");
const generateRandomSalt = (length) => {
    return forge.random.getBytesSync(length);
};
exports.generateRandomSalt = generateRandomSalt;
exports.default = exports.generateRandomSalt;
//# sourceMappingURL=generate-random-salt.js.map