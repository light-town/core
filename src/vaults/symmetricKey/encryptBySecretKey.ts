import encryptAes from '../../common/aes/encrypt';

export class EncryptedSymmetricKey {
  kty: string;
  alg: string;
  key: string;
  tag: string;
  tagLength: number;
  iv: string;
  salt: string;
}

/**
 * @description Encrypt Symmetric Key with Master Unlock Key
 * @param {String} symmetricKey
 * @param {String} secretKey Master Unlock Key
 * @param {String} salt
 */
export const encryptBySecretKey = async (
  symmetricKey: string,
  secretKey: string,
  salt: string,
): Promise<EncryptedSymmetricKey> => {
  const encryptedSymmetricKey = await encryptAes(symmetricKey, secretKey);

  return Promise.resolve({
    kty: encryptedSymmetricKey.kty,
    alg: encryptedSymmetricKey.alg,
    tagLength: encryptedSymmetricKey.tagLength,
    tag: encryptedSymmetricKey.tag,
    key: encryptedSymmetricKey.data,
    iv: encryptedSymmetricKey.iv,
    salt,
  });
};

export default encryptBySecretKey;
