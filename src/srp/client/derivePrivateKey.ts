import { H } from '../params';

/**
 * @description Derive private key
 * @param {String} secretKey
 * @param {String} password
 * @param {String} salt
 * @returns {String} private key
 */
export const derivePrivateKey = (
  secretKey: string,
  password: string,
  salt: string,
): string => {
  const s = salt;
  const I = secretKey;
  const p = password;
  return H(s, H(`${I}:${p}`)).toHex();
};
