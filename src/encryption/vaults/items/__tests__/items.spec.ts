import * as faker from 'faker';
import common from '../../../common';
import items from '../index';

describe('[Vaults] [Items] ...', () => {
  it('should encrypt and decrypt vault item overview and details by vault key', async () => {
    const vaultKey = common.generateCryptoRandomString(32);

    const overview = {
      title: faker.random.word(),
      desc: faker.random.word(),
    };

    const details = {
      username: faker.internet.userName(),
      passoword: faker.internet.password(),
    };

    const encryptedVaultItem = await items.encryptVaultItem(
      overview,
      details,
      vaultKey,
    );

    expect(encryptedVaultItem.encDetails).toStrictEqual({
      kty: 'AES',
      alg: 'AES-GCM-256',
      data: encryptedVaultItem.encDetails.data,
      iv: encryptedVaultItem.encDetails.iv,
      tag: encryptedVaultItem.encDetails.tag,
      tagLength: encryptedVaultItem.encDetails.tagLength,
    });
    expect(typeof encryptedVaultItem.encDetails.data).toStrictEqual('string');
    expect(typeof encryptedVaultItem.encDetails.iv).toStrictEqual('string');
    expect(typeof encryptedVaultItem.encDetails.tag).toStrictEqual('string');
    expect(typeof encryptedVaultItem.encDetails.tagLength).toStrictEqual(
      'number',
    );

    const decryptedVaultItem = await items.decryptVaultItem(
      encryptedVaultItem,
      vaultKey,
    );

    expect(decryptedVaultItem.overview).toStrictEqual(overview);
    expect(decryptedVaultItem.details).toStrictEqual(details);
  });
});
