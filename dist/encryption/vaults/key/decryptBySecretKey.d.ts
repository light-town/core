import { EncryptedVaultKeyBySecretKey } from './definitions';
export default function decryptBySecretKey(encryptedVaultKey: EncryptedVaultKeyBySecretKey, secretKey: string): Promise<string>;
