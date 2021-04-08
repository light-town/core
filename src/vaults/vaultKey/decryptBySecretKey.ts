import decryptAes from '../../common/aes/decrypt';
import { EncryptedVaultKey } from './encryptBySecretKey';

/**
 * @param {EncryptedVaultKey} encryptedVaultKey
 * @param {String} secretKey
 * @returns Promise with decrypted Vault Key
 * @throws Fail to decrypt vault key
 */
export const decryptBySecretKey = async (
  encryptedVaultKey: EncryptedVaultKey,
  secretKey: string,
): Promise<string> => {
  return await decryptAes(
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
};

export default decryptBySecretKey;
