import * as Types from './types';
declare const _default: {
    client: {
        derivePrivateKey(secretKey: string, password: string, salt: string): string;
        generateEphemeralKeyPair(): Types.Ephemeral;
        deriveVerifier(secretKey: string, password: string): Types.Verifier;
        deriveSession(clientSecretEphemeralKey: string, serverPublicEphemeralKey: string, salt: string, secretKey: string, privateKey: string): Types.Session;
        verifySession(clientPublicEphemeral: string, clientSession: Types.Session, serverSessionProof: string): void;
    };
    server: {
        generateEphemeralKeyPair(verifier: string): Types.Ephemeral;
        deriveSession(serverSecretEphemeralKey: string, clientPublicEphemeralKey: string, salt: string, secretKey: string, verifier: string, clientSessionProofKey: string): Types.Session;
    };
};
export default _default;
