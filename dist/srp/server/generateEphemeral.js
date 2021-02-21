"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEphemeral = void 0;
const srp = require("secure-remote-password/server");
const generateEphemeral = (verifier) => {
    return srp.generateEphemeral(verifier);
};
exports.generateEphemeral = generateEphemeral;
exports.default = exports.generateEphemeral;
//# sourceMappingURL=generateEphemeral.js.map