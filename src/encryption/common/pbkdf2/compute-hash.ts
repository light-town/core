import * as sha256 from 'fast-sha256';

/**
 * Perform PBKDF2-HMAC-SHA256 hashing
 * @param {Object}
 */
export const computeHash = ({ secretKey, salt, iterations }) =>
  sha256.pbkdf2(secretKey, salt, iterations, 32);

export default computeHash;
