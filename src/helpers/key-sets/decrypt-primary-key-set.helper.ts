import encryption from '../../encryption';
import { MasterUnlockKey } from '../../encryption/common/derive-master-unlock-key';
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

  const result = {
    ...encKeySet,
    privateKey,
    symmetricKey,
    publicKey: encryption.common.rsa.publicKeyFromString(encKeySet.publicKey),
  };

  delete result.encPrivateKey;
  delete result.encSymmetricKey;

  return <any>result;
}
