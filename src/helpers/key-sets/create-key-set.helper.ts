import encryption from '../../encryption';
import { PublicKey } from '../../encryption/common/rsa/definitions';
import { EncryptedKeySet } from './definitions';

export default async function createKeySetHelper(
  publicKey: PublicKey,
  symmetricKey: string,
): Promise<EncryptedKeySet> {
  return {
    encSymmetricKey: await encryption.keySets.symmetricKey.encryptByPublicKey(
      symmetricKey,
      publicKey,
    ),
  };
}
