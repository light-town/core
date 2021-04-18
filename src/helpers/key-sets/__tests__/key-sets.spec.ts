import encryption from '../../../encryption';
import muk from '../../master-unlock-key';
import keySets from '../index';

describe('[Helpers] [Key Sets] ...', () => {
  it('should create a primary key set', async () => {
    const masterPassword = encryption.common.generateCryptoRandomString(8);
    const accountKey = encryption.common.generateAccountKey(
      'A1',
      encryption.common.generateCryptoRandomString(8),
    );

    const masterUnlockKey = muk.deriveMasterUnlockKeyHelper(
      accountKey,
      masterPassword,
    );

    const encPrimaryKeySet = await keySets.createPrimaryKeySetHelper(
      masterUnlockKey,
    );

    expect(encPrimaryKeySet.publicKey).toBeDefined();
    expect(encPrimaryKeySet.encSymmetricKey).toBeDefined();
    expect(encPrimaryKeySet.encPrivateKey).toBeDefined();
  });

  it('should create a key set', async () => {
    const masterPassword = encryption.common.generateCryptoRandomString(8);
    const accountKey = encryption.common.generateAccountKey(
      'A1',
      encryption.common.generateCryptoRandomString(8),
    );

    const masterUnlockKey = muk.deriveMasterUnlockKeyHelper(
      accountKey,
      masterPassword,
    );

    const encPrimaryKeySet = await keySets.createPrimaryKeySetHelper(
      masterUnlockKey,
    );

    const primaryKeySet = await keySets.decryptPrimaryKeySetHelper(
      encPrimaryKeySet,
      masterUnlockKey,
    );

    const vaultKey = encryption.common.generateCryptoRandomString(8);
    const encKeySet = await keySets.createKeySetHelper(
      primaryKeySet.publicKey,
      vaultKey,
    );

    expect(encKeySet.encSymmetricKey).toBeDefined();
  });
});
