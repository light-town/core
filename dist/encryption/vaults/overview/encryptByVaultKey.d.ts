import { EncryptedData } from '../../common/aes/definitions';
export default function encryptByVaultKey(overview: Record<string, any>, vaultKey: string): Promise<EncryptedData>;
