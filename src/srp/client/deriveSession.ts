import * as srp from 'secure-remote-password/client';

/**
 * @param {String} salt gotten from server
 * @param {String} secretKey
 * @param {String} password
 * @param {String} clientSecretEphemeral
 * @param {String} serverPublicEphemeral
 * @return {srp.Session} clientSession
 */
export const deriveSession = (
  salt: string,
  secretKey: string,
  password: string,
  clientSecretEphemeral: string,
  serverPublicEphemeral: string,
): srp.Session => {
  const privateKey = srp.derivePrivateKey(salt, secretKey, password);
  return srp.deriveSession(
    clientSecretEphemeral,
    serverPublicEphemeral,
    salt,
    secretKey,
    privateKey,
  );
};

export default deriveSession;
