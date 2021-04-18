import encryption from '../../encryption';
import {
  EncryptedVaultItem,
  VaultItemDetails,
  VaultItemOverview,
} from './definitions';

export default async function createVaultItemHelper(
  overview: VaultItemOverview,
  details: VaultItemDetails,
  vaultKey: string,
): Promise<EncryptedVaultItem> {
  return encryption.vaults.items.encryptVaultItem(overview, details, vaultKey);
}
