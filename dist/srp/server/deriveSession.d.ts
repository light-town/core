import * as Types from '../types';
export declare const deriveSession: (serverSecretEphemeralKey: string, clientPublicEphemeralKey: string, salt: string, secretKey: string, verifier: string, clientSessionProofKey: string) => Types.Session;
export default deriveSession;
