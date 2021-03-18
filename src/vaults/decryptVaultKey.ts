import * as forge from 'node-forge';

/**
 * @description Decrypt Vault Key with Private Key
 * @param {forge.util.ByteBuffer} encryptedVaultKey encryptedVaultKey
 * @param {forge.pki.rsa.PrivateKey} privateKey Private Key
 * @returns {String} Vault Key
 */

export const decryptVaultKey = (
  encryptedVaultKey: string,
  privateKey: forge.pki.rsa.PrivateKey,
) => {
  const decodedKey = forge.util.decode64(encryptedVaultKey);

  return privateKey.decrypt(decodedKey, 'RSA-OAEP', {
    md: forge.md.sha256.create(),
  });
};
