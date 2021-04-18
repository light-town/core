import encryption from '../../encryption';
import { MasterUnlockKey } from '../../encryption/common/deriveMasterUnlockKey';
import { EncryptedPrimaryKeySet } from './definitions';

export default async function createPrimaryKeySetHelper(
  masterUnlockKey: MasterUnlockKey,
): Promise<EncryptedPrimaryKeySet> {
  const symmetricKey = encryption.common.generateCryptoRandomString(32);
  const {
    publicKey,
    privateKey,
  } = await encryption.common.rsa.generateKeyPair();

  const encryptedPrivateKey = await encryption.keySets.privateKey.encryptBySymmetricKey(
    privateKey,
    symmetricKey,
  );
  const encryptedSymmetricKey = await encryption.keySets.symmetricKey.encryptBySecretKey(
    symmetricKey,
    masterUnlockKey.key,
    masterUnlockKey.salt,
  );

  return {
    publicKey: encryption.common.rsa.publicKeyToString(publicKey),
    encPrivateKey: encryptedPrivateKey,
    encSymmetricKey: encryptedSymmetricKey,
  };
}
