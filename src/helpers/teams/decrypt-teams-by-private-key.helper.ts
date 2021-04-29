import { PrivateKey } from '../../encryption/common/rsa/definitions';
import { EncryptedTeam, DecryptedTeam } from './definitions';
import decryptTeamByPrivateKeyHelper from './decrypt-team-by-private-key.helper';

export default async function decryptTeamsByPrivateKeyHelper(
  encTeams: EncryptedTeam[],
  privateKey: PrivateKey,
): Promise<DecryptedTeam[]> {
  return Promise.all(
    encTeams.map((encTeam) =>
      decryptTeamByPrivateKeyHelper(encTeam, privateKey),
    ),
  );
}
