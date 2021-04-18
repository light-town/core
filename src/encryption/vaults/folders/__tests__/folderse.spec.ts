import * as faker from 'faker';
import common from '../../../common';
import categories from '../index';

describe('[Vaults] [Folders] ...', () => {
  it('should encrypt and decrypt vault folder overview', async () => {
    const vaultKey = common.generateCryptoRandomString(32);

    const overview = {
      title: faker.random.word(),
      desc: faker.random.word(),
    };

    const encryptedVaultFolder = await categories.encryptVaultFolder(
      overview,
      vaultKey,
    );

    const decryptedVaultFolder = await categories.decryptVaultFolder(
      encryptedVaultFolder,
      vaultKey,
    );

    expect(decryptedVaultFolder.overview).toStrictEqual(overview);
  });
});
