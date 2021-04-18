import { EncryptedVaultItemCategory, DecryptedVaultItemCategory } from './definitions';
export default function decryptVaultItemCategoryHelper(encVaultCategories: EncryptedVaultItemCategory[], vaultKey: string): Promise<DecryptedVaultItemCategory[]>;
