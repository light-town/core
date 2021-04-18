import { EncryptedSymmetricKeyBySecretKey } from './definitions';
export default function decryptBySecretKey(encryptedSymmetricKey: EncryptedSymmetricKeyBySecretKey, secretKey: string): Promise<string>;
