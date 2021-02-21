import { deriveSession } from './deriveSession';
import { generateEphemeral } from './generateEphemeral';
export { deriveSession, generateEphemeral };
declare const _default: {
    deriveSession: (serverSecretEphemeral: string, clientPublicEphemeral: string, salt: string, secretKey: string, verifier: string, clientSessionProof: string) => import("secure-remote-password/server").Session;
    generateEphemeral: (verifier: string) => import("secure-remote-password/server").Ephemeral;
};
export default _default;
