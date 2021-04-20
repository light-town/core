import encryption from '../../encryption';
import { DecryptedVaultItem, EncryptedVaultItem } from './definitions';

export default async function decryptVaultItemsHelper(
  encVaultItems: EncryptedVaultItem[],
  vaultKey: string,
): Promise<DecryptedVaultItem[]> {
  return Promise.all(
    encVaultItems.map((encVaultItem) =>
      encryption.vaults.items
        .decryptVaultItem(encVaultItem, vaultKey)
        .then((vaultItem) => {
          const result = {
            ...vaultItem,
            ...encVaultItem,
          };

          delete result.encOverview;
          delete result.encDetails;

          return result;
        }),
    ),
  );
}
