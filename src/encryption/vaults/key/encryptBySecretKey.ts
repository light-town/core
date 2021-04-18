import aes from '../../common/aes';
import { EncryptedVaultKeyBySecretKey } from './definitions';

/**
 * @description Encrypt Vault Key with Secret Key
 * @param {String} vaultKey
 * @param {String} secretKey Secret Key
 */
export const encryptBySecretKey = async (
  vaultKey: string,
  secretKey: string,
): Promise<EncryptedVaultKeyBySecretKey> => {
  const encryptedVaultKey = await aes.encrypt(vaultKey, secretKey);

  return Promise.resolve({
    kty: encryptedVaultKey.kty,
    alg: encryptedVaultKey.alg,
    tagLength: encryptedVaultKey.tagLength,
    tag: encryptedVaultKey.tag,
    key: encryptedVaultKey.data,
    iv: encryptedVaultKey.iv,
  });
};

export default encryptBySecretKey;
