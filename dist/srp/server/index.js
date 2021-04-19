"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEphemeralKeyPair = exports.deriveSession = void 0;
const derive_session_1 = require("./derive-session");
Object.defineProperty(exports, "deriveSession", { enumerable: true, get: function () { return derive_session_1.deriveSession; } });
const generate_ephemeral_key_pair_1 = require("./generate-ephemeral-key-pair");
Object.defineProperty(exports, "generateEphemeralKeyPair", { enumerable: true, get: function () { return generate_ephemeral_key_pair_1.generateEphemeralKeyPair; } });
exports.default = {
    deriveSession: derive_session_1.deriveSession,
    generateEphemeralKeyPair: generate_ephemeral_key_pair_1.generateEphemeralKeyPair,
};
//# sourceMappingURL=index.js.map