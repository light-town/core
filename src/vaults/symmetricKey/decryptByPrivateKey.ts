import decryptRsa, { PrivateKey } from '../../common/rsa/decrypt';
import { EncryptedSymmetricKey } from './encryptByPublicKey';

/**
 * @param {EncryptedSymmetricKey} encryptedSymmetricKey
 * @param {PrivateKey} privateKey
 * @returns Promise with decrypted Symmetric Key
 * @throws Fail to decrypt symmetric key
 */
export const decryptByPrivateKey = async (
  encryptedSymmetricKey: EncryptedSymmetricKey,
  privateKey: PrivateKey,
): Promise<string> => {
  return await decryptRsa(
    {
      kty: encryptedSymmetricKey.kty,
      alg: encryptedSymmetricKey.alg,
      data: encryptedSymmetricKey.key,
    },
    privateKey,
  );
};

export default decryptByPrivateKey;
