"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateKeyPair = void 0;
const forge = require("node-forge");
const __1 = require("..");
const generateKeyPair = () => {
    const seed = __1.generateRandomSalt(32);
    return forge.pki.ed25519.generateKeyPair({ seed });
};
exports.generateKeyPair = generateKeyPair;
exports.default = exports.generateKeyPair;
//# sourceMappingURL=generate-key-pair.js.map