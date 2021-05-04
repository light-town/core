import * as faker from 'faker';
import encryption from '../../../encryption';
import teams from '../index';
import helpers from '../../index';

describe('[Helpers] [Teams] ...', () => {
  it('should create a team', async () => {
    const TEST_OVERVIEW = {
      name: faker.random.word(),
      desc: faker.random.words(),
    };

    const secretKey = encryption.common.generateCryptoRandomString(32);

    const encTeam = await teams.createTeamHelper(TEST_OVERVIEW, secretKey);
    const team = await teams.decryptTeamBySecretKeyHelper(encTeam, secretKey);

    expect(team.overview).toStrictEqual(TEST_OVERVIEW);
  });

  it('should share a team', async () => {
    const TEST_OVERVIEW = {
      name: faker.random.word(),
      desc: faker.random.words(),
    };

    const secretKey = encryption.common.generateCryptoRandomString(32);

    const encTeam = await teams.createTeamHelper(TEST_OVERVIEW, secretKey);
    const team = await teams.decryptTeamBySecretKeyHelper(encTeam, secretKey);

    const newSecretKey = encryption.common.generateCryptoRandomString(32);
    const encSharedTeam = await teams.shareTeamHelper(team, newSecretKey);
    const sharedTeam = await teams.decryptTeamBySecretKeyHelper(
      encSharedTeam,
      newSecretKey,
    );

    expect(sharedTeam).toStrictEqual(team);
  });

  it('should decrypt a teams list', async () => {
    const TEST_ENC_TEAMS = [];
    const TEST_OVERVIEWS = [];

    const secretKey = encryption.common.generateCryptoRandomString(32);

    for (let i = 0; i < 10; ++i) {
      const overview = {
        name: faker.random.word(),
        desc: faker.random.words(),
      };

      TEST_ENC_TEAMS.push(await teams.createTeamHelper(overview, secretKey));
      TEST_OVERVIEWS.push(overview);
    }

    const decrTeams = await teams.decryptTeamsBySecretKeyHelper(
      TEST_ENC_TEAMS,
      secretKey,
    );

    expect(decrTeams.map((t) => t.overview)).toStrictEqual(TEST_OVERVIEWS);
  });

  it('should correctly create a team and some key sets', async () => {
    const { publicKey } = await encryption.common.rsa.generateKeyPair();

    const symmKey = encryption.common.generateCryptoRandomString(32);
    const overview = {
      name: faker.random.word(),
      desc: faker.random.words(),
    };

    const encTeam = await teams.createTeamHelper(overview, symmKey);
    const team = await teams.decryptTeamBySecretKeyHelper(encTeam, symmKey);

    const muk = helpers.masterUnlockKey.deriveMasterUnlockKeyHelper(
      team.key,
      team.key,
    );

    await helpers.keySets.createPrimaryKeySetHelper(muk);
    await helpers.keySets.createKeySetHelper(symmKey, publicKey);
  });
});
