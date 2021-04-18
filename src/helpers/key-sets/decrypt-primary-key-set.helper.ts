import encryption from '../../encryption';
import { MasterUnlockKey } from '../../encryption/common/deriveMasterUnlockKey';
import { EncryptedPrimaryKeySet, DecryptedPrimaryKeySet } from './definitions';

export default async function decryptPrimaryKeySetHelper(
  encKeySet: EncryptedPrimaryKeySet,
  muk: MasterUnlockKey,
): Promise<DecryptedPrimaryKeySet> {
  const symmetricKey = await encryption.keySets.symmetricKey.decryptBySecretKey(
    encKeySet.encSymmetricKey,
    muk.key,
  );
  const privateKey = await encryption.keySets.privateKey.decryptBySymmetricKey(
    encKeySet.encPrivateKey,
    symmetricKey,
  );
  return {
    publicKey: encryption.common.rsa.publicKeyFromString(encKeySet.publicKey),
    privateKey,
    symmetricKey,
  };
}
