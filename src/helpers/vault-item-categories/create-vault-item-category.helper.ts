import encryption from '../../encryption';
import {
  EncryptedVaultItemCategory,
  VaultCategoryOverview,
  VaultCategoryDetails,
} from './definitions';

export default async function createVaultItemCategoryHelper(
  overview: VaultCategoryOverview,
  details: VaultCategoryDetails,
  vaultKey: string,
): Promise<EncryptedVaultItemCategory> {
  return encryption.vaults.categories.encryptVaultItemCategory(
    overview,
    details,
    vaultKey,
  );
}
