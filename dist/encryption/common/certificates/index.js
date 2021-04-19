"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyCertificate = exports.signCertificate = exports.generateKeyPair = void 0;
const generate_key_pair_1 = require("./generate-key-pair");
Object.defineProperty(exports, "generateKeyPair", { enumerable: true, get: function () { return generate_key_pair_1.generateKeyPair; } });
const sign_certificate_1 = require("./sign-certificate");
Object.defineProperty(exports, "signCertificate", { enumerable: true, get: function () { return sign_certificate_1.signCertificate; } });
const verify_certificate_1 = require("./verify-certificate");
Object.defineProperty(exports, "verifyCertificate", { enumerable: true, get: function () { return verify_certificate_1.verifyCertificate; } });
exports.default = {
    generateKeyPair: generate_key_pair_1.generateKeyPair,
    signCertificate: sign_certificate_1.signCertificate,
    verifyCertificate: verify_certificate_1.verifyCertificate,
};
//# sourceMappingURL=index.js.map