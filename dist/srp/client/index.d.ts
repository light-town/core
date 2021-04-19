import { deriveVerifier } from './derive-verifier';
import { deriveSession } from './derive-session';
import { verifySession } from './verify-session';
import { generateEphemeralKeyPair } from './generate-ephemeral-key-pair';
import { derivePrivateKey } from './derive-private-key';
export { deriveVerifier, deriveSession, verifySession, generateEphemeralKeyPair, derivePrivateKey, };
declare const _default: {
    deriveVerifier: (privateKey: string) => string;
    deriveSession: (clientSecretEphemeralKey: string, serverPublicEphemeralKey: string, salt: string, secretKey: string, privateKey: string) => import("../types").Session;
    verifySession: (clientPublicEphemeral: string, clientSession: import("../types").Session, serverSessionProof: string) => void;
    generateEphemeralKeyPair: () => import("../types").Ephemeral;
    derivePrivateKey: (secretKey: string, password: string, salt: string) => string;
};
export default _default;
