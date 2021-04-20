import encryption from '../../encryption';
import {
  EncryptedVaultItemCategory,
  DecryptedVaultItemCategory,
} from './definitions';

export default async function decryptVaultItemCategoryHelper(
  encVaultCategories: EncryptedVaultItemCategory[],
  vaultKey: string,
): Promise<DecryptedVaultItemCategory[]> {
  return Promise.all(
    encVaultCategories.map((encVaultItemCategory) =>
      encryption.vaults.categories
        .decryptVaultItemCategory(encVaultItemCategory, vaultKey)
        .then((vaultItemCategory) => {
          const result = {
            ...vaultItemCategory,
            ...encVaultItemCategory,
          };

          delete result.encOverview;
          delete result.encDetails;

          return result;
        }),
    ),
  );
}
