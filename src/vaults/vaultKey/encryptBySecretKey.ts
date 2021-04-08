import encryptAes from '../../common/aes/encrypt';

export class EncryptedVaultKey {
  kty: string;
  alg: string;
  key: string;
  tag: string;
  tagLength: number;
  iv: string;
}

/**
 * @description Encrypt Vault Key with Secret Key
 * @param {String} vaultKey
 * @param {String} secretKey Secret Key
 */
export const encryptBySecretKey = async (
  vaultKey: string,
  secretKey: string,
): Promise<EncryptedVaultKey> => {
  const encryptedVaultKey = await encryptAes(vaultKey, secretKey);

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
