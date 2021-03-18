"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateKeyPair = void 0;
const forge = require("node-forge");
const generateKeyPair = () => {
    const seed = forge.random.getBytesSync(32);
    return forge.pki.ed25519.generateKeyPair({ seed: seed });
};
exports.generateKeyPair = generateKeyPair;
exports.default = exports.generateKeyPair;
//# sourceMappingURL=generateKeyPair.js.map