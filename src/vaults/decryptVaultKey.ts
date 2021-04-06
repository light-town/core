import * as forge from 'node-forge';
import base64 from '../common/base64';

/**
 * @description Decrypt Vault Key with Private Key
 * @param {forge.util.ByteBuffer} encryptedVaultKey encryptedVaultKey
 * @param {forge.pki.rsa.PrivateKey} privateKey Private Key
 * @returns {String} Vault Key
 */

export const decryptVaultKey = (
  encryptedVaultKey: string,
  privateKey: forge.pki.rsa.PrivateKey,
): string => {
  return privateKey.decrypt(base64.decode(encryptedVaultKey), 'RSA-OAEP', {
    md: forge.md.sha256.create(),
  });
};
