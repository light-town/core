import { deriveSession } from './derive-session';
import { generateEphemeralKeyPair } from './generate-ephemeral-key-pair';
export { deriveSession, generateEphemeralKeyPair };
declare const _default: {
    deriveSession: (serverSecretEphemeralKey: string, clientPublicEphemeralKey: string, salt: string, secretKey: string, verifier: string, clientSessionProofKey: string) => import("../types").Session;
    generateEphemeralKeyPair: (verifier: string) => import("../types").Ephemeral;
};
export default _default;
