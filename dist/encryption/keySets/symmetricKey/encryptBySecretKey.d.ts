import { EncryptedSymmetricKeyBySecretKey } from './definitions';
export default function encryptBySecretKey(symmetricKey: string, secretKey: string, salt: string): Promise<EncryptedSymmetricKeyBySecretKey>;
