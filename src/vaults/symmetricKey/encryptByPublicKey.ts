import encryptAes, { PublicKey } from '../../common/rsa/encrypt';

export class EncryptedSymmetricKey {
  kty: string;
  alg: string;
  key: string;
}

/**
 * @description Encrypt Symmetric Key with Public Key
 * @param {String} symmetricKey
 * @param {PublicKey} publicKey
 */
export const encryptByPublicKey = async (
  symmetricKey: string,
  publicKey: PublicKey,
): Promise<EncryptedSymmetricKey> => {
  const encryptedSymmetricKey = await encryptAes(symmetricKey, publicKey);

  return Promise.resolve({
    kty: encryptedSymmetricKey.kty,
    alg: encryptedSymmetricKey.alg,
    key: encryptedSymmetricKey.data,
  });
};

export default encryptByPublicKey;
