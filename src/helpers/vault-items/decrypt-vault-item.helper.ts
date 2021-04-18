import encryption from '../../encryption';
import { DecryptedVaultItem, EncryptedVaultItem } from './definitions';

export default async function decryptVaultItemHelper(
  encVaultItem: EncryptedVaultItem,
  vaultKey: string,
): Promise<DecryptedVaultItem> {
  return encryption.vaults.items.decryptVaultItem(encVaultItem, vaultKey);
}
