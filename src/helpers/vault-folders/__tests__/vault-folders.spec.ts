import encryption from '../../../encryption';
import masterUnlockKey from '../../master-unlock-key';
import keySets from '../../key-sets';
import vaults from '../../vaults';
import vaultFolders from '../index';

describe('[Helpers] [Vault Folders] ...', () => {
  it('should create a vault folder', async () => {
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

    const encVaultFolder = await vaultFolders.createVaultFolderHelper(
      overview,
      vault.key,
    );

    const vaultFolder = await vaultFolders.decryptVaultFolderHelper(
      encVaultFolder,
      vault.key,
    );

    expect(vaultFolder).toStrictEqual({
      overview,
    });
  });
});
