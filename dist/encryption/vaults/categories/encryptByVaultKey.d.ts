import { EncryptedVaultItemCategory } from './definitions';
export default function encryptVaultItem(overview: Record<string, any>, vaultKey: string): Promise<EncryptedVaultItemCategory>;
