import * as srp from 'secure-remote-password/client';

export interface Verifier {
  verifier: string;
  salt: string;
}

/**
 * @param {String} secretKey
 * @param {String} password
 */
export const deriveVerifier = (
  secretKey: string,
  password: string,
): Verifier => {
  const salt = srp.generateSalt();
  const privateKey = srp.derivePrivateKey(salt, secretKey, password);
  const verifier = srp.deriveVerifier(privateKey);

  return {
    verifier,
    salt,
  };
};

export default deriveVerifier;
