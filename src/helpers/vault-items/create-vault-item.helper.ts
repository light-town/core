import encryption from '../../encryption';
import {
  EncryptedVaultItem,
  VaultItemDetails,
  VaultItemOverview,
} from './definitions';

export default async function createVaultItemHelper<
  O = VaultItemOverview,
  D = VaultItemDetails
>(overview: O, details: D, vaultKey: string): Promise<EncryptedVaultItem> {
  return encryption.vaults.items.encryptVaultItem(overview, details, vaultKey);
}
