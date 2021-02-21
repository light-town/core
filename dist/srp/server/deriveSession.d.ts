import * as srp from 'secure-remote-password/server';
export declare const deriveSession: (serverSecretEphemeral: string, clientPublicEphemeral: string, salt: string, secretKey: string, verifier: string, clientSessionProof: string) => srp.Session;
export default deriveSession;
