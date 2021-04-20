import encryption from '../../encryption';
import {
  EncryptedVaultItemCategory,
  DecryptedVaultItemCategory,
} from './definitions';

export default async function decryptVaultItemCategoryHelper(
  encVaultItemCategories: EncryptedVaultItemCategory,
  vaultKey: string,
): Promise<DecryptedVaultItemCategory> {
  const vaultItemCategory = await encryption.vaults.categories.decryptVaultItemCategory(
    encVaultItemCategories,
    vaultKey,
  );

  const result = {
    ...vaultItemCategory,
    ...encVaultItemCategories,
  };

  delete result.encOverview;
  delete result.encDetails;

  return result;
}
