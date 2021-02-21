import { deriveVerifier } from './deriveVerifier';
import { deriveSession } from './deriveSession';
import { verifySession } from './verifySession';
import { generateEphemeral } from './generateEphemeral';
export { deriveVerifier, deriveSession, verifySession, generateEphemeral };
declare const _default: {
    deriveVerifier: (secretKey: string, password: string) => import("./deriveVerifier").Verifier;
    deriveSession: (salt: string, secretKey: string, password: string, clientSecretEphemeral: string, serverPublicEphemeral: string) => import("secure-remote-password/client").Session;
    verifySession: (clientPublicEphemeral: string, clientSession: import("secure-remote-password/client").Session, serverSessionProof: string) => void;
    generateEphemeral: () => import("secure-remote-password/client").Ephemeral;
};
export default _default;
