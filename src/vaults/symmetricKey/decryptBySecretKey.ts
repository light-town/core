import decryptAes from '../../common/aes/decrypt';
import { EncryptedSymmetricKey } from './encryptBySecretKey';

/**
 * @param {EncryptedSymmetricKey} encryptedSymmetricKey
 * @param {String} secretKey
 * @returns Promise with decrypted Symmetric Key
 * @throws Fail to decrypt symmetric key
 */
export const decryptBySecretKey = async (
  encryptedSymmetricKey: EncryptedSymmetricKey,
  secretKey: string,
): Promise<string> => {
  return await decryptAes(
    {
      kty: encryptedSymmetricKey.kty,
      alg: encryptedSymmetricKey.alg,
      tagLength: encryptedSymmetricKey.tagLength,
      tag: encryptedSymmetricKey.tag,
      data: encryptedSymmetricKey.key,
      iv: encryptedSymmetricKey.iv,
    },
    secretKey,
  );
};

export default decryptBySecretKey;
