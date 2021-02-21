import * as srp from 'secure-remote-password/client';

/**
 * @param {String} clientPublicEphemeral
 * @param {srp.Session} clientSession
 * @param {String} serverSessionProof
 * @throws Throws an error if the session proof is invalid.
 */
export const verifySession = (
  clientPublicEphemeral: string,
  clientSession: srp.Session,
  serverSessionProof: string,
): void => {
  srp.verifySession(clientPublicEphemeral, clientSession, serverSessionProof);
};

export default verifySession;
