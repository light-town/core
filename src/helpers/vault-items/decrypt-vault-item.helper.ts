import encryption from '../../encryption';
import { DecryptedVaultItem, EncryptedVaultItem } from './definitions';

export default async function decryptVaultItemHelper(
  encVaultItem: EncryptedVaultItem,
  vaultKey: string,
): Promise<DecryptedVaultItem> {
  const vaultItem = await encryption.vaults.items.decryptVaultItem(
    encVaultItem,
    vaultKey,
  );

  const result = {
    ...vaultItem,
    ...encVaultItem,
  };

  delete result.encOverview;
  delete result.encDetails;

  return result;
}
