import encryption from '../../../encryption';
import masterUnlockKey from '../../master-unlock-key';
import keySets from '../../key-sets';
import vaults from '../index';

describe('[Helpers] [Vaults] ...', () => {
  it('should create a vault', async () => {
    const masterPassword = encryption.common.generateCryptoRandomString(32);
    const accountKet = encryption.common.generateAccountKey(
      'A1',
      encryption.common.generateCryptoRandomString(32),
    );
    const muk = masterUnlockKey.deriveMasterUnlockKeyHelper(
      accountKet,
      masterPassword,
    );
    const encPrimaryKeySet = await keySets.createPrimaryKeySetHelper(muk);
    const primaryKeySet = await keySets.decryptPrimaryKeySetHelper(
      encPrimaryKeySet,
      muk,
    );

    const overview = {
      name: 'TEST_NAME',
      desc: 'TEST_DESC',
    };

    const encVault = await vaults.createVaultHelper(
      overview,
      primaryKeySet.publicKey,
    );
    const vault = await vaults.decryptVaultByPrivateKeyHelper(
      encVault,
      primaryKeySet.privateKey,
    );

    expect(vault.overview).toStrictEqual(overview);
  });

  it('should create a vault with utf-8 name', async () => {
    const masterPassword = encryption.common.generateCryptoRandomString(32);
    const accountKet = encryption.common.generateAccountKey(
      'A1',
      encryption.common.generateCryptoRandomString(32),
    );
    const muk = masterUnlockKey.deriveMasterUnlockKeyHelper(
      accountKet,
      masterPassword,
    );
    const encPrimaryKeySet = await keySets.createPrimaryKeySetHelper(muk);
    const primaryKeySet = await keySets.decryptPrimaryKeySetHelper(
      encPrimaryKeySet,
      muk,
    );

    const overview = {
      name: 'Личный',
      desc: 'Тестовое хранилище',
    };

    const encVault = await vaults.createVaultHelper(
      overview,
      primaryKeySet.publicKey,
    );
    const vault = await vaults.decryptVaultByPrivateKeyHelper(
      encVault,
      primaryKeySet.privateKey,
    );

    expect(vault.overview).toStrictEqual(overview);
  });

  it('should decrypt a vault by secret key', async () => {
    const masterPassword = encryption.common.generateCryptoRandomString(32);
    const accountKet = encryption.common.generateAccountKey(
      'A1',
      encryption.common.generateCryptoRandomString(32),
    );
    const muk = masterUnlockKey.deriveMasterUnlockKeyHelper(
      accountKet,
      masterPassword,
    );
    const encPrimaryKeySet = await keySets.createPrimaryKeySetHelper(muk);
    const primaryKeySet = await keySets.decryptPrimaryKeySetHelper(
      encPrimaryKeySet,
      muk,
    );

    const overview = {
      name: 'TEST_NAME',
      desc: 'TEST_DESC',
    };

    const encVault = await vaults.createVaultHelper(
      overview,
      primaryKeySet.publicKey,
    );
    const vault = await vaults.decryptVaultByPrivateKeyHelper(
      encVault,
      primaryKeySet.privateKey,
    );

    const secretKey = encryption.common.generateCryptoRandomString(32);

    const newEncSharedVault = await vaults.shareVaultHelper(vault, secretKey);
    const newSharedVault = await vaults.decryptVaultBySecretKeyHelper(
      newEncSharedVault,
      secretKey,
    );

    expect(vault).toStrictEqual(newSharedVault);
  });
});
