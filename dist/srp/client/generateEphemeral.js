"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEphemeral = void 0;
const srp = require("secure-remote-password/client");
const generateEphemeral = () => {
    return srp.generateEphemeral();
};
exports.generateEphemeral = generateEphemeral;
exports.default = exports.generateEphemeral;
//# sourceMappingURL=generateEphemeral.js.map