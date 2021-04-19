import { EncryptedVaultItemCategory, VaultCategoryOverview, VaultCategoryDetails } from './definitions';
export default function createVaultItemCategoryHelper(overview: VaultCategoryOverview, details: VaultCategoryDetails, vaultKey: string): Promise<EncryptedVaultItemCategory>;
