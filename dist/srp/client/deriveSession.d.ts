import * as Types from '../types';
export declare const deriveSession: (clientSecretEphemeralKey: string, serverPublicEphemeralKey: string, salt: string, secretKey: string, privateKey: string) => Types.Session;
export default deriveSession;
