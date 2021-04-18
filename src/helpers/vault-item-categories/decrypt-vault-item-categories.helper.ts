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
    encVaultCategories.map((c) =>
      encryption.vaults.categories.decryptVaultItemCategory(c, vaultKey),
    ),
  );
}
