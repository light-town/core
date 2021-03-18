import * as srp from 'secure-remote-password/client';
import { generateRandomSalt } from '~/common/generateRandomSalt';

export interface Verifier {
  verifier: string;
  privateKey: string;
  salt: string;
}

/**
 * @param {String} secretKey
 * @param {String} password
 * @returns {String} verifier
 */
export const deriveVerifier = (
  secretKey: string,
  password: string,
): Verifier => {
  const salt = generateRandomSalt(32);
  const privateKey = srp.derivePrivateKey(salt, secretKey, password);
  const verifier = srp.deriveVerifier(privateKey);

  return {
    verifier,
    salt,
    privateKey,
  };
};

export default deriveVerifier;
