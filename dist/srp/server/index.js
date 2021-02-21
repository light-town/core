"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEphemeral = exports.deriveSession = void 0;
const deriveSession_1 = require("./deriveSession");
Object.defineProperty(exports, "deriveSession", { enumerable: true, get: function () { return deriveSession_1.deriveSession; } });
const generateEphemeral_1 = require("./generateEphemeral");
Object.defineProperty(exports, "generateEphemeral", { enumerable: true, get: function () { return generateEphemeral_1.generateEphemeral; } });
exports.default = {
    deriveSession: deriveSession_1.deriveSession,
    generateEphemeral: generateEphemeral_1.generateEphemeral,
};
//# sourceMappingURL=index.js.map