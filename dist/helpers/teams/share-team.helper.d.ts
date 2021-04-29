import { DecryptedTeam, EncryptedTeam } from './definitions';
export default function shareTeamHelper(team: DecryptedTeam, secretKey: string): Promise<EncryptedTeam>;
