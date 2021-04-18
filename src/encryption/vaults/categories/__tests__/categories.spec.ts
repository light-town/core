import * as faker from 'faker';
import common from '../../../common';
import categories from '../index';

describe('[Vaults] [Categories] ...', () => {
  it('should encrypt and decrypt vault item category overview', async () => {
    const vaultKey = common.generateCryptoRandomString(32);

    const overview = {
      title: faker.random.word(),
      desc: faker.random.word(),
    };

    const encryptedVaultItemCategory = await categories.encryptVaultItemCategory(
      overview,
      vaultKey,
    );

    const decryptedVaultItemCategory = await categories.decryptVaultItemCategory(
      encryptedVaultItemCategory,
      vaultKey,
    );

    expect(decryptedVaultItemCategory.overview).toStrictEqual(overview);
  });
});
