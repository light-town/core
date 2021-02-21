import * as srp from 'secure-remote-password/client';
export declare const verifySession: (clientPublicEphemeral: string, clientSession: srp.Session, serverSessionProof: string) => void;
export default verifySession;
