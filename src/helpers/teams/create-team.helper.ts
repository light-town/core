import { PublicKey } from '../../encryption/common/rsa/definitions';
import encryption from '../../encryption';
import { TeamOverview, EncryptedTeam } from './definitions';

export default async function createTeamHelper(
  overview: TeamOverview,
  publicKey: PublicKey,
): Promise<EncryptedTeam> {
  const key = encryption.common.generateCryptoRandomString(32);
  const encKey = await encryption.teams.key.encryptByPublicKey(key, publicKey);
  const encOverview = await encryption.teams.overview.encryptByTeamKey(
    overview,
    key,
  );
  return {
    encKey,
    encOverview,
  };
}
