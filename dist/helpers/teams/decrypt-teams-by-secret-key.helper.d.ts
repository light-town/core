import { EncryptedTeam, DecryptedTeam } from './definitions';
export default function decryptTeamsBySecretKeyHelper(encTeams: EncryptedTeam[], secretKey: string): Promise<DecryptedTeam[]>;
