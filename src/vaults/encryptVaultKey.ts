import * as forge from 'node-forge';

export class EncryptedVaultKey {
  alg: 'RSA-OAEP-256';
  kty: 'RSA';
  key: string;
}

/**
 * @description Encrypt Vault Key with Public key
 * @param {String} vaultKey Vault Key
 * @param {forge.pki.rsa.PublicKey} publicKey RSA Public key
 * @returns Encrypted Vault Key
 */
export const encryptVaultKey = (
  vaultKey: string,
  publicKey: forge.pki.rsa.PublicKey,
): EncryptedVaultKey => {
  const encryptedVaultKey = publicKey.encrypt(vaultKey, 'RSA-OAEP', {
    md: forge.md.sha256.create(),
  });

  return {
    alg: 'RSA-OAEP-256',
    kty: 'RSA',
    key: forge.util.encode64(encryptedVaultKey),
  };
};

export default encryptVaultKey;
