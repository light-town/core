import { EncryptedVaultItem, VaultItemDetails, VaultItemOverview } from './definitions';
export default function createVaultItemHelper<O = VaultItemOverview, D = VaultItemDetails>(overview: O, details: D, vaultKey: string): Promise<EncryptedVaultItem>;
