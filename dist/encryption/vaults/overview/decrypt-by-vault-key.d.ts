import { EncryptedData } from '../../common/aes/definitions';
export default function decryptByVaultKey(overview: EncryptedData, vaultKey: string): Promise<Record<string, any>>;
