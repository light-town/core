import * as sha256 from 'fast-sha256';

/**
 * Perform PBKDF2-HMAC-SHA256 hashing
 * @param {Object}
 */
export const computeHash = ({
  uint8MasterPassword,
  encryptionKeySalt,
  iterations = 100000,
}) => sha256.pbkdf2(uint8MasterPassword, encryptionKeySalt, iterations, 32);

export default computeHash;
