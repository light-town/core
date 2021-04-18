import * as forge from 'node-forge';
import base64 from '../../common/base64';
import { EncryptedVaultKeyByPublicKey } from './definitions';
import { PrivateKey } from '../../common/rsa/definitions';

/**
 * @description Decrypt Vault Key with Private Key
 * @param {EncryptedVaultKey} encryptedVaultKey
 * @param {PrivateKey} privateKey
 * @returns {String} Vault Key
 */
export default function decryptByPrivateKey(
  encryptedVaultKey: EncryptedVaultKeyByPublicKey,
  privateKey: PrivateKey,
): Promise<string> {
  return Promise.resolve(
    privateKey.decrypt(base64.decode(encryptedVaultKey.key), 'RSA-OAEP', {
      md: forge.md.sha256.create(),
    }),
  );
}
