import { PrivateKey } from '../../common/rsa/definitions';
import rsa from '../../common/rsa';
import { EncryptedSymmetricKeyByPublicKey } from './definitions';

/**
 * @param {EncryptedSymmetricKeyByPublicKey} encryptedSymmetricKey
 * @param {PrivateKey} privateKey
 * @returns Promise with decrypted Symmetric Key
 * @throws Fail to decrypt symmetric key
 */
export default async function decryptByPrivateKey(
  encryptedSymmetricKey: EncryptedSymmetricKeyByPublicKey,
  privateKey: PrivateKey,
): Promise<string> {
  return await rsa.decrypt(
    {
      kty: encryptedSymmetricKey.kty,
      alg: encryptedSymmetricKey.alg,
      data: encryptedSymmetricKey.key,
    },
    privateKey,
  );
}
