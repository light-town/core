import { EncryptedData } from './definitions';
export default function encrypt(data: string, key: string): Promise<EncryptedData>;
