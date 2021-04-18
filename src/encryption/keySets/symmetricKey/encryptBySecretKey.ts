import aes from '../../common/aes';
import { EncryptedSymmetricKeyBySecretKey } from './definitions';

/**
 * @description Encrypt Symmetric Key with Master Unlock Key
 * @param {String} symmetricKey
 * @param {String} secretKey Master Unlock Key
 * @param {String} salt
 */
export default async function encryptBySecretKey(
  symmetricKey: string,
  secretKey: string,
  salt: string,
): Promise<EncryptedSymmetricKeyBySecretKey> {
  const encryptedSymmetricKey = await aes.encrypt(symmetricKey, secretKey);

  return Promise.resolve({
    kty: encryptedSymmetricKey.kty,
    alg: encryptedSymmetricKey.alg,
    tagLength: encryptedSymmetricKey.tagLength,
    tag: encryptedSymmetricKey.tag,
    key: encryptedSymmetricKey.data,
    iv: encryptedSymmetricKey.iv,
    salt,
  });
}
