import { EncryptedVaultItemCategory, DecryptedVaultItemCategory } from './definitions';
export default function decryptVaultItemCategoryHelper(encVaultItemCategories: EncryptedVaultItemCategory, vaultKey: string): Promise<DecryptedVaultItemCategory>;
