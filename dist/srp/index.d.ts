import * as Types from './types';
export declare const SRP: {
    Client: {
        generateEphemeralKeyPair(): Types.Ephemeral;
        deriveVerifier(secretKey: string, password: string): Types.Verifier;
        deriveSession(clientSecretEphemeralKey: string, serverPublicEphemeralKey: string, salt: string, secretKey: string, privateKey: string): Types.Session;
        verifySession(clientPublicEphemeral: string, clientSession: Types.Session, serverSessionProof: string): void;
    };
    Server: {
        generateEphemeralKeyPair(verifier: string): Types.Ephemeral;
        deriveSession(serverSecretEphemeralKey: string, clientPublicEphemeralKey: string, salt: string, secretKey: string, verifier: string, clientSessionProofKey: string): Types.Session;
    };
};
export default SRP;
