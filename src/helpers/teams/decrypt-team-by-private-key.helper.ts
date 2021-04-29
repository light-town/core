import { PrivateKey } from '../../encryption/common/rsa/definitions';
import encryption from '../../encryption';
import { TeamOverview, EncryptedTeam, DecryptedTeam } from './definitions';

export default async function decryptTeamByPrivateKeyHelper(
  encTeam: EncryptedTeam,
  privateKey: PrivateKey,
): Promise<DecryptedTeam> {
  const key = await encryption.teams.key.decryptByPrivateKey(
    encTeam.encKey,
    privateKey,
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
