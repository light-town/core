import { EncryptedData, PublicKey } from './definitions';
export default function encrypt(data: string, publicKey: PublicKey): Promise<EncryptedData>;
