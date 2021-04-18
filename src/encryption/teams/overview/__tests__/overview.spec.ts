import * as faker from 'faker';
import common from '../../../common';
import overview from '../index';

describe('[Teams] [Overview] ...', () => {
  it('should encrypt and decrypt team overview of team key', async () => {
    const TEST_TEAM_KEY = common.generateCryptoRandomString(32);
    const TEST_OVERVIEW = {
      title: faker.random.word(),
      desc: faker.random.words(),
    };

    const encryptedData = await overview.encryptByTeamKey(
      TEST_OVERVIEW,
      TEST_TEAM_KEY,
    );

    const decryptedData = await overview.decryptByTeamKey(
      encryptedData,
      TEST_TEAM_KEY,
    );

    expect(decryptedData).toStrictEqual(TEST_OVERVIEW);
  });
});
