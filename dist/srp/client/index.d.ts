import { deriveVerifier } from './deriveVerifier';
import { deriveSession } from './deriveSession';
import { verifySession } from './verifySession';
import { generateEphemeralKeyPair } from './generateEphemeralKeyPair';
import { derivePrivateKey } from './derivePrivateKey';
export { deriveVerifier, deriveSession, verifySession, generateEphemeralKeyPair, derivePrivateKey, };
declare const _default: {
    deriveVerifier: (privateKey: string) => string;
    deriveSession: (clientSecretEphemeralKey: string, serverPublicEphemeralKey: string, salt: string, secretKey: string, privateKey: string) => import("../types").Session;
    verifySession: (clientPublicEphemeral: string, clientSession: import("../types").Session, serverSessionProof: string) => void;
    generateEphemeralKeyPair: () => import("../types").Ephemeral;
    derivePrivateKey: (secretKey: string, password: string, salt: string) => string;
};
export default _default;
