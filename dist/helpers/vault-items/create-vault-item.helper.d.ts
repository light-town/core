import { EncryptedVaultItem, VaultItemDetails, VaultItemOverview } from './definitions';
export default function createVaultItemHelper(overview: VaultItemOverview, details: VaultItemDetails, vaultKey: string): Promise<EncryptedVaultItem>;
