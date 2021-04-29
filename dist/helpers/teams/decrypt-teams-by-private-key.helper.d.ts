import { PrivateKey } from '../../encryption/common/rsa/definitions';
import { EncryptedTeam, DecryptedTeam } from './definitions';
export default function decryptTeamsByPrivateKeyHelper(encTeams: EncryptedTeam[], privateKey: PrivateKey): Promise<DecryptedTeam[]>;
