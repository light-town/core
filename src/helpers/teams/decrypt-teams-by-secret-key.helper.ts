import { EncryptedTeam, DecryptedTeam } from './definitions';
import decryptTeamBySecretKeyHelper from './decrypt-team-by-secret-key.helper';

export default async function decryptTeamsBySecretKeyHelper(
  encTeams: EncryptedTeam[],
  secretKey: string,
): Promise<DecryptedTeam[]> {
  return Promise.all(
    encTeams.map((encTeam) => decryptTeamBySecretKeyHelper(encTeam, secretKey)),
  );
}
