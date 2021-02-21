import * as srp from 'secure-remote-password/server';

/**
 * @param {String} serverSecretEphemeral
 * @param {String} clientPublicEphemeral
 * @param {String} salt
 * @param {String} secretKey
 * @param {String} verifier
 * @param {String} clientSessionProof
 * @param {srp.Session} serverSession
 */
export const deriveSession = (
  serverSecretEphemeral: string,
  clientPublicEphemeral: string,
  salt: string,
  secretKey: string,
  verifier: string,
  clientSessionProof: string,
) => {
  return srp.deriveSession(
    serverSecretEphemeral,
    clientPublicEphemeral,
    salt,
    secretKey,
    verifier,
    clientSessionProof,
  );
};

export default deriveSession;
