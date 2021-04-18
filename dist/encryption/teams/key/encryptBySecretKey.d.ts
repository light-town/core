import { EncryptedTeamKeyBySecretKey } from './definitions';
export default function encryptBySecretKey(teamKey: string, secretKey: string): Promise<EncryptedTeamKeyBySecretKey>;
