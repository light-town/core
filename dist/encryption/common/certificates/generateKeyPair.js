"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateKeyPair = void 0;
const forge = require("node-forge");
const common_1 = require("../../common");
const generateKeyPair = () => {
    const seed = common_1.generateRandomSalt(32);
    return forge.pki.ed25519.generateKeyPair({ seed });
};
exports.generateKeyPair = generateKeyPair;
exports.default = exports.generateKeyPair;
//# sourceMappingURL=generateKeyPair.js.map