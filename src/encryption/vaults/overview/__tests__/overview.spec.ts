import * as faker from 'faker';
import common from '../../../common';
import overview from '../index';

describe('[Vaults] [Overview] ...', () => {
  it('should encrypt and decrypt vault overview', async () => {
    const TEST_VAULT_KEY = common.generateCryptoRandomString(32);
    const TEST_METADATA = {
      title: faker.random.word(),
      description: faker.random.words(),
    };

    const encryptedData = await overview.encryptByVaultKey(
      TEST_METADATA,
      TEST_VAULT_KEY,
    );

    const decryptedData = await overview.decryptByVaultKey(
      encryptedData,
      TEST_VAULT_KEY,
    );

    expect(decryptedData).toStrictEqual(TEST_METADATA);
  });
});
