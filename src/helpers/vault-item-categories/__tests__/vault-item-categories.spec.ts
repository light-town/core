import encryption from '../../../encryption';
import masterUnlockKey from '../../master-unlock-key';
import keySets from '../../key-sets';
import vaults from '../../vaults';
import vaultItemCategories from '../index';
import { VaultCategoryDetails, VaultCategoryOverview } from '../definitions';
import schemas from '../default-schemas';
import { PASSWORD } from '../default-categories';

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

    const overview: VaultCategoryOverview = {
      name: PASSWORD,
    };

    const details: VaultCategoryDetails = {
      schema: {
        fields: schemas.Password.fields,
      },
    };

    const encVaultCategory = await vaultItemCategories.createVaultItemCategoryHelper(
      overview,
      details,
      vault.key,
    );

    const vaultCategory = await vaultItemCategories.decryptVaultItemCategoryHelper(
      encVaultCategory,
      vault.key,
    );

    expect(vaultCategory).toStrictEqual({
      overview,
      details,
    });
  });

  it('should create default vault item categories', async () => {
    const vaultKey = encryption.common.generateCryptoRandomString(32);
    const encDefaultVaultItemCategories = await vaultItemCategories.createDefaultVaultItemCategories(
      vaultKey,
    );

    const defaultVaultItemCategories = await vaultItemCategories.decryptVaultItemCategoriesHelper(
      encDefaultVaultItemCategories,
      vaultKey,
    );

    expect(defaultVaultItemCategories).toHaveLength(1);
    expect(defaultVaultItemCategories).toStrictEqual([
      {
        overview: {
          name: 'Password',
          default: true,
        },
        details: {
          schema: {
            fields: schemas.Password.fields,
          },
        },
      },
    ]);
  });
});
