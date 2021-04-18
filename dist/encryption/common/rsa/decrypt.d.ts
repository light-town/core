import { EncryptedData, PrivateKey } from './definitions';
export default function decrypt(data: EncryptedData, privateKey: PrivateKey): Promise<string>;
