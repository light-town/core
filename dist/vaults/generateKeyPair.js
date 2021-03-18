"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateKeyPair = void 0;
const forge = require("node-forge");
const generateKeyPair = async () => {
    return await forge.pki.rsa.generateKeyPair({ bits: 2048, workers: 2 });
};
exports.generateKeyPair = generateKeyPair;
exports.default = exports.generateKeyPair;
//# sourceMappingURL=generateKeyPair.js.map