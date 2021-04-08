import * as forge from 'node-forge';
import base64 from '../../common/base64';
import { EncryptedVaultKey } from './encryptByPublicKey';

/**
 * @description Decrypt Vault Key with Private Key
 * @param {EncryptedVaultKey} encryptedVaultKey
 * @param {forge.pki.rsa.PrivateKey} privateKey
 * @returns {String} Vault Key
 */
export const decryptByPrivateKey = (
  encryptedVaultKey: EncryptedVaultKey,
  privateKey: forge.pki.rsa.PrivateKey,
): Promise<string> => {
  return Promise.resolve(
    privateKey.decrypt(base64.decode(encryptedVaultKey.key), 'RSA-OAEP', {
      md: forge.md.sha256.create(),
    }),
  );
};

export default decryptByPrivateKey;
