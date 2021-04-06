import * as forge from 'node-forge';
import base64 from '../common/base64';

export class EncryptedVaultKey {
  kty: 'RSA';
  alg: 'RSA-OAEP-256';
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
    kty: 'RSA',
    alg: 'RSA-OAEP-256',
    key: base64.encode(encryptedVaultKey),
  };
};

export default encryptVaultKey;
