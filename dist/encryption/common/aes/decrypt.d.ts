import { EncryptedData } from './definitions';
export default function decrypt(data: EncryptedData, key: string): Promise<string>;
