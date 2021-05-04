import encryption from '../../encryption';
import { TeamOverview, EncryptedTeam } from './definitions';

export default async function createTeamHelper(
  overview: TeamOverview,
  secretKey: string,
): Promise<EncryptedTeam> {
  const key = encryption.common.generateCryptoRandomString(32);
  const encKey = await encryption.teams.key.encryptBySecretKey(key, secretKey);
  const encOverview = await encryption.teams.overview.encryptByTeamKey(
    overview,
    key,
  );
  return {
    encKey,
    encOverview,
  };
}
