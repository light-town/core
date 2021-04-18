import { EncryptedVaultItemCategory, VaultCategoryOverview } from './definitions';
export default function createVaultItemCategoryHelper(overview: VaultCategoryOverview, vaultKey: string): Promise<EncryptedVaultItemCategory>;
