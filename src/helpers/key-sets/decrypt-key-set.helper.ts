import encryption from '../../encryption';
import { PrivateKey } from '../../encryption/common/rsa/definitions';
import { DecryptedKeySet, EncryptedKeySet } from './definitions';

export default async function decryptKeySetHelper(
  encKeySet: EncryptedKeySet,
  privateKey: PrivateKey,
): Promise<DecryptedKeySet> {
  const symmetricKey = await encryption.keySets.symmetricKey.decryptByPrivateKey(
    encKeySet.encSymmetricKey,
    privateKey,
  );

  const result = {
    symmetricKey,
    ...encKeySet,
  };

  delete result.encSymmetricKey;

  return result;
}
