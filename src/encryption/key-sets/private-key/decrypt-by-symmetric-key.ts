import * as forge from 'node-forge';
import base64 from '../../common/base64';
import { EncryptedPrivateKeyBySymmetricKey } from './definitions';
import { PrivateKey } from '../../common/rsa/definitions';

/**
 * @description Decrypt Private Key with Decrypted Symmetric Key
 * @param {String} encryptedPrivateKey Encrypted Private Key
 * @param {String} symmetricKey Symmetric Key
 * @returns Decrypt Private Key
 */
export default function decryptBySymmetricKey(
  encryptedPrivateKey: EncryptedPrivateKeyBySymmetricKey,
  symmetricKey: string,
): Promise<PrivateKey> {
  return Promise.resolve(
    forge.pki.decryptRsaPrivateKey(
      base64.decode(encryptedPrivateKey.key),
      symmetricKey,
    ),
  );
}
