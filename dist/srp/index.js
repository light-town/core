"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const server_1 = require("./server");
const big_number_1 = require("./big-number");
exports.default = {
    client: {
        generateEphemeralKeyPair() {
            return client_1.default.generateEphemeralKeyPair();
        },
        deriveVerifier(secretKey, password) {
            const salt = big_number_1.default.randomInteger(256 / 8).toHex();
            const privateKey = client_1.default.derivePrivateKey(secretKey, password, salt);
            const verifier = client_1.default.deriveVerifier(privateKey);
            return {
                verifier,
                privateKey,
                salt,
            };
        },
        deriveSession(clientSecretEphemeralKey, serverPublicEphemeralKey, salt, secretKey, privateKey) {
            return client_1.default.deriveSession(clientSecretEphemeralKey, serverPublicEphemeralKey, salt, secretKey, privateKey);
        },
        verifySession(clientPublicEphemeral, clientSession, serverSessionProof) {
            return client_1.default.verifySession(clientPublicEphemeral, clientSession, serverSessionProof);
        },
    },
    server: {
        generateEphemeralKeyPair(verifier) {
            return server_1.default.generateEphemeralKeyPair(verifier);
        },
        deriveSession(serverSecretEphemeralKey, clientPublicEphemeralKey, salt, secretKey, verifier, clientSessionProofKey) {
            return server_1.default.deriveSession(serverSecretEphemeralKey, clientPublicEphemeralKey, salt, secretKey, verifier, clientSessionProofKey);
        },
    },
};
//# sourceMappingURL=index.js.map