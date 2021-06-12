import { PublicKey } from '../../encryption/common/rsa/definitions';
import { TeamOverview, EncryptedTeam } from './definitions';
export default function createTeamHelper(overview: TeamOverview, publicKey: PublicKey): Promise<EncryptedTeam>;
