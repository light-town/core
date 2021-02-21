import * as srp from 'secure-remote-password/client';
export declare const deriveSession: (salt: string, secretKey: string, password: string, clientSecretEphemeral: string, serverPublicEphemeral: string) => srp.Session;
export default deriveSession;
