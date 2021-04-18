import { EncryptedVaultItemCategory, DecryptedVaultItemCategory } from './definitions';
export default function decryptVaultItemCategoryHelper(encVaultCategory: EncryptedVaultItemCategory, vaultKey: string): Promise<DecryptedVaultItemCategory>;
