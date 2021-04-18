"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyCertificate = exports.signCertificate = exports.generateKeyPair = void 0;
const generateKeyPair_1 = require("./generateKeyPair");
Object.defineProperty(exports, "generateKeyPair", { enumerable: true, get: function () { return generateKeyPair_1.generateKeyPair; } });
const signCertificate_1 = require("./signCertificate");
Object.defineProperty(exports, "signCertificate", { enumerable: true, get: function () { return signCertificate_1.signCertificate; } });
const verifyCertificate_1 = require("./verifyCertificate");
Object.defineProperty(exports, "verifyCertificate", { enumerable: true, get: function () { return verifyCertificate_1.verifyCertificate; } });
exports.default = {
    generateKeyPair: generateKeyPair_1.generateKeyPair,
    signCertificate: signCertificate_1.signCertificate,
    verifyCertificate: verifyCertificate_1.verifyCertificate,
};
//# sourceMappingURL=index.js.map