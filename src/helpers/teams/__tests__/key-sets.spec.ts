import * as faker from 'faker';
import encryption from '../../../encryption';
import teams from '../index';

describe('[Helpers] [Teams] ...', () => {
  it('should create a team', async () => {
    const TEST_OVERVIEW = {
      name: faker.random.word(),
      desc: faker.random.words(),
    };

    const {
      publicKey,
      privateKey,
    } = await encryption.common.rsa.generateKeyPair();

    const encTeam = await teams.createTeamHelper(TEST_OVERVIEW, publicKey);
    const team = await teams.decryptTeamByPrivateKeyHelper(encTeam, privateKey);

    expect(team.overview).toStrictEqual(TEST_OVERVIEW);
  });

  it('should share a team', async () => {
    const TEST_OVERVIEW = {
      name: faker.random.word(),
      desc: faker.random.words(),
    };

    const {
      publicKey,
      privateKey,
    } = await encryption.common.rsa.generateKeyPair();

    const encTeam = await teams.createTeamHelper(TEST_OVERVIEW, publicKey);
    const team = await teams.decryptTeamByPrivateKeyHelper(encTeam, privateKey);

    const secretKey = await encryption.common.generateCryptoRandomString(32);
    const encSharedTeam = await teams.shareTeamHelper(team, secretKey);
    const sharedTeam = await teams.decryptTeamBySecretKeyHelper(
      encSharedTeam,
      secretKey,
    );

    expect(sharedTeam).toStrictEqual(team);
  });

  it('should decrypt a teams list', async () => {
    const TEST_ENC_TEAMS = [];
    const TEST_OVERVIEWS = [];

    const {
      publicKey,
      privateKey,
    } = await encryption.common.rsa.generateKeyPair();

    for (let i = 0; i < 10; ++i) {
      const overview = {
        name: faker.random.word(),
        desc: faker.random.words(),
      };

      TEST_ENC_TEAMS.push(await teams.createTeamHelper(overview, publicKey));
      TEST_OVERVIEWS.push(overview);
    }

    const decrTeams = await teams.decryptTeamsByPrivateKeyHelper(
      TEST_ENC_TEAMS,
      privateKey,
    );

    expect(decrTeams.map((t) => t.overview)).toStrictEqual(TEST_OVERVIEWS);
  });
});
