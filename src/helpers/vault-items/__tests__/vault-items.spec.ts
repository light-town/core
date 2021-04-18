import encryption from '../../../encryption';
import masterUnlockKey from '../../master-unlock-key';
import keySets from '../../key-sets';
import vaults from '../../vaults';
import vaultItems from '../index';

describe('[Helpers] [Vault Items] ...', () => {
  it('should create a vault item', async () => {
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

    const encVault = await vaults.createVaultHelper(
      {
        name: 'TEST_NAME',
        desc: 'TEST_DESC',
      },
      primaryKeySet.publicKey,
    );
    const vault = await vaults.decryptVaultByPrivateKeyHelper(
      encVault,
      primaryKeySet.privateKey,
    );

    const overview = {
      name: 'TEST_NAME',
      desc: 'TEST_DESC',
    };
    const details = {
      fields: [],
    };

    const encVaultItem = await vaultItems.createVaultItemHelper(
      overview,
      details,
      vault.key,
    );

    const vaultItem = await vaultItems.decryptVaultItemHelper(
      encVaultItem,
      vault.key,
    );

    expect(vaultItem).toStrictEqual({
      overview,
      details,
    });
  });

  it('should decrypt vault item without details', async () => {
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

    const encVault = await vaults.createVaultHelper(
      {
        name: 'TEST_NAME',
        desc: 'TEST_DESC',
      },
      primaryKeySet.publicKey,
    );
    const vault = await vaults.decryptVaultByPrivateKeyHelper(
      encVault,
      primaryKeySet.privateKey,
    );

    const overview = {
      name: 'TEST_NAME',
      desc: 'TEST_DESC',
    };
    const details = {
      fields: [],
    };

    const encVaultItem = await vaultItems.createVaultItemHelper(
      overview,
      details,
      vault.key,
    );

    const vaultItem = await vaultItems.decryptVaultItemHelper(
      { encOverview: encVaultItem.encOverview },
      vault.key,
    );

    expect(vaultItem).toStrictEqual({
      overview,
      details: undefined,
    });
  });
});
