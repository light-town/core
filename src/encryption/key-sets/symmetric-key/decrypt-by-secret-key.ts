import aes from '../../common/aes';
import { EncryptedSymmetricKeyBySecretKey } from './definitions';

/**
 * @param {EncryptedSymmetricKeyBySecretKey} encryptedSymmetricKey
 * @param {String} secretKey
 * @returns Promise with decrypted Symmetric Key
 * @throws Fail to decrypt symmetric key
 */
export default async function decryptBySecretKey(
  encryptedSymmetricKey: EncryptedSymmetricKeyBySecretKey,
  secretKey: string,
): Promise<string> {
  return await aes.decrypt(
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
}
