"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forge = require("node-forge");
const base64_1 = require("../base64");
function publicKeyFromString(pem) {
    return forge.pki.publicKeyFromPem(base64_1.default.decode(pem));
}
exports.default = publicKeyFromString;
//# sourceMappingURL=publicKeyFromString.js.map