import * as forge from 'node-forge';

/**
 * @description Decrypt Private Key with Decrypted Symmetric Key
 * @param {String} encryptedPrivateKey Encrypted Private Key
 * @param {String} symmetricKey Symmetric Key
 * @returns Decrypt Private Key
 */
export const decryptPrivateKey = (
  encryptedPrivateKey: string,
  symmetricKey: string,
) => {
  return forge.pki.decryptRsaPrivateKey(encryptedPrivateKey, symmetricKey);
};

export default decryptPrivateKey;
