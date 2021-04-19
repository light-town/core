import { EncryptedTeamKeyBySecretKey } from './definitions';
export default function decryptBySecretKey(encryptedTeamKey: EncryptedTeamKeyBySecretKey, secretKey: string): Promise<string>;
