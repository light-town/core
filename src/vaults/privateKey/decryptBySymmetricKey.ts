import * as forge from 'node-forge';
import base64 from '../../common/base64';
import { EncryptedPrivateKey } from './encryptBySymmetricKey';

/**
 * @description Decrypt Private Key with Decrypted Symmetric Key
 * @param {String} encryptedPrivateKey Encrypted Private Key
 * @param {String} symmetricKey Symmetric Key
 * @returns Decrypt Private Key
 */
export const decryptBySymmetricKey = (
  encryptedPrivateKey: EncryptedPrivateKey,
  symmetricKey: string,
): Promise<forge.pki.rsa.PrivateKey> => {
  return Promise.resolve(
    forge.pki.decryptRsaPrivateKey(
      base64.decode(encryptedPrivateKey.key),
      symmetricKey,
    ),
  );
};

export default decryptBySymmetricKey;
