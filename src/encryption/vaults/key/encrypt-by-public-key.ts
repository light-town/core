import * as forge from 'node-forge';
import base64 from '../../common/base64';
import { PublicKey } from '../../common/rsa/definitions';
import { EncryptedVaultKeyByPublicKey } from './definitions';

/**
 * @description Encrypt Vault Key with Public key
 * @param {String} vaultKey Vault Key
 * @param {PublicKey} publicKey RSA Public key
 * @returns Encrypted Vault Key
 */
export default async function encryptByPublicKey(
  vaultKey: string,
  publicKey: PublicKey,
): Promise<EncryptedVaultKeyByPublicKey> {
  const encryptedVaultKey = publicKey.encrypt(vaultKey, 'RSA-OAEP', {
    md: forge.md.sha256.create(),
  });

  return Promise.resolve({
    kty: 'RSA',
    alg: 'RSA-OAEP-256',
    key: base64.encode(encryptedVaultKey),
  });
}
