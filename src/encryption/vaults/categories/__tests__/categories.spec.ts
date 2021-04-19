import * as faker from 'faker';
import common from '../../../common';
import categories from '../index';

describe('[Vaults] [Categories] ...', () => {
  it('should encrypt and decrypt vault item category', async () => {
    const vaultKey = common.generateCryptoRandomString(32);

    const overview = {
      name: faker.random.word(),
      desc: faker.random.word(),
    };

    const details = {
      schema: {},
    };

    const encryptedVaultItemCategory = await categories.encryptVaultItemCategory(
      overview,
      details,
      vaultKey,
    );

    const decryptedVaultItemCategory = await categories.decryptVaultItemCategory(
      encryptedVaultItemCategory,
      vaultKey,
    );

    expect(decryptedVaultItemCategory.overview).toStrictEqual(overview);
  });
});
