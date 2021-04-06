import * as forge from 'node-forge';
import base64 from '../common/base64';

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
  return forge.pki.decryptRsaPrivateKey(
    base64.decode(encryptedPrivateKey),
    symmetricKey,
  );
};

export default decryptPrivateKey;
