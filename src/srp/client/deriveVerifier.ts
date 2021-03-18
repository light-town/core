import * as srp from 'secure-remote-password/client';
import { genSalt } from '~/common/genSalt';

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
  const salt = genSalt();
  const privateKey = srp.derivePrivateKey(salt, secretKey, password);
  const verifier = srp.deriveVerifier(privateKey);

  return {
    verifier,
    salt,
    privateKey,
  };
};

export default deriveVerifier;
