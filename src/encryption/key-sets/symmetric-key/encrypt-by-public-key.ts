import { PublicKey } from '../../common/rsa/definitions';
import aes from '../../common/rsa';
import { EncryptedSymmetricKeyByPublicKey } from './definitions';

/**
 * @description Encrypt Symmetric Key with Public Key
 * @param {String} symmetricKey
 * @param {PublicKey} publicKey
 */
export default async function encryptByPublicKey(
  symmetricKey: string,
  publicKey: PublicKey,
): Promise<EncryptedSymmetricKeyByPublicKey> {
  const encryptedSymmetricKey = await aes.encrypt(symmetricKey, publicKey);

  return Promise.resolve({
    kty: encryptedSymmetricKey.kty,
    alg: encryptedSymmetricKey.alg,
    key: encryptedSymmetricKey.data,
  });
}
