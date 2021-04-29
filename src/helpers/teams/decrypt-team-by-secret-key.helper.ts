import encryption from '../../encryption';
import { TeamOverview, EncryptedTeam, DecryptedTeam } from './definitions';
import { EncryptedTeamKeyBySecretKey } from '../../encryption/teams/key/definitions';

export default async function decryptTeamBySecretKeyHelper(
  encTeam: EncryptedTeam,
  secretKey: string,
): Promise<DecryptedTeam> {
  const key = await encryption.teams.key.decryptBySecretKey(
    <EncryptedTeamKeyBySecretKey>encTeam.encKey,
    secretKey,
  );
  const overview = await encryption.teams.overview.decryptByTeamKey(
    encTeam.encOverview,
    key,
  );
  const result = {
    key,
    overview: <TeamOverview>overview,
    ...encTeam,
  };

  delete result.encKey;
  delete result.encOverview;

  return result;
}
