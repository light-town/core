import aes from '../../common/aes';
import { EncryptedVaultKeyBySecretKey } from './definitions';

/**
 * @param {EncryptedVaultKeyBySecretKey} encryptedVaultKey
 * @param {String} secretKey
 * @returns Promise with decrypted Vault Key
 * @throws Fail to decrypt vault key
 */
export default async function decryptBySecretKey(
  encryptedVaultKey: EncryptedVaultKeyBySecretKey,
  secretKey: string,
): Promise<string> {
  return await aes.decrypt(
    {
      kty: encryptedVaultKey.kty,
      alg: encryptedVaultKey.alg,
      tagLength: encryptedVaultKey.tagLength,
      tag: encryptedVaultKey.tag,
      data: encryptedVaultKey.key,
      iv: encryptedVaultKey.iv,
    },
    secretKey,
  );
}
