import encryption from '../../encryption';
import { DecryptedVaultItem, EncryptedVaultItem } from './definitions';

export default async function decryptVaultItemsHelper(
  encVaultItems: EncryptedVaultItem[],
  vaultKey: string,
): Promise<DecryptedVaultItem[]> {
  return Promise.all(
    encVaultItems.map((i) =>
      encryption.vaults.items.decryptVaultItem(i, vaultKey),
    ),
  );
}
