import { PrivateKey } from '../../encryption/common/rsa/definitions';
import { EncryptedTeam, DecryptedTeam } from './definitions';
export default function decryptTeamByPrivateKeyHelper(encTeam: EncryptedTeam, privateKey: PrivateKey): Promise<DecryptedTeam>;
