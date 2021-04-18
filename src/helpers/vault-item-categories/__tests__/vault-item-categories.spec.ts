import encryption from '../../../encryption';
import masterUnlockKey from '../../master-unlock-key';
import keySets from '../../key-sets';
import vaults from '../../vaults';
import vaultItemCategories from '../index';

describe('[Helpers] [Vault Categories] ...', () => {
  it('should create a vault item category', async () => {
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

    const encVaultCategory = await vaultItemCategories.createVaultItemCategoryHelper(
      overview,
      vault.key,
    );

    const vaultCategory = await vaultItemCategories.decryptVaultItemCategoryHelper(
      encVaultCategory,
      vault.key,
    );

    expect(vaultCategory).toStrictEqual({
      overview,
    });
  });
});
