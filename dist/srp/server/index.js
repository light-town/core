"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEphemeralKeyPair = exports.deriveSession = void 0;
const deriveSession_1 = require("./deriveSession");
Object.defineProperty(exports, "deriveSession", { enumerable: true, get: function () { return deriveSession_1.deriveSession; } });
const generateEphemeralKeyPair_1 = require("./generateEphemeralKeyPair");
Object.defineProperty(exports, "generateEphemeralKeyPair", { enumerable: true, get: function () { return generateEphemeralKeyPair_1.generateEphemeralKeyPair; } });
exports.default = {
    deriveSession: deriveSession_1.deriveSession,
    generateEphemeralKeyPair: generateEphemeralKeyPair_1.generateEphemeralKeyPair,
};
//# sourceMappingURL=index.js.map