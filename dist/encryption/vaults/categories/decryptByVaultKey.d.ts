import { EncryptedVaultItemCategory, DecryptedVaultItemCategory } from './definitions';
export default function decryptVaultItemCategory(encryptedVaultItemCategory: EncryptedVaultItemCategory, vaultKey: string): Promise<DecryptedVaultItemCategory>;
