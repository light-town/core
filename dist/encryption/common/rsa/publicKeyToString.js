"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forge = require("node-forge");
const base64_1 = require("../base64");
function publicKeyToString(publicKey) {
    return base64_1.default.encode(forge.pki.publicKeyToPem(publicKey));
}
exports.default = publicKeyToString;
//# sourceMappingURL=publicKeyToString.js.map