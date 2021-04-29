import { DecryptedTeam, EncryptedTeam } from './definitions';
import encryption from '../../encryption';

export default async function shareTeamHelper(
  team: DecryptedTeam,
  secretKey: string,
): Promise<EncryptedTeam> {
  const encKey = await encryption.teams.key.encryptBySecretKey(
    team.key,
    secretKey,
  );
  const encOverview = await encryption.teams.overview.encryptByTeamKey(
    team.overview,
    team.key,
  );
  return {
    encKey,
    encOverview,
  };
}
