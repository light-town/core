import { EncryptedTeam, DecryptedTeam } from './definitions';
export default function decryptTeamBySecretKeyHelper(encTeam: EncryptedTeam, secretKey: string): Promise<DecryptedTeam>;
