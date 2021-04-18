import encryption from '../../encryption';
import {
  EncryptedVaultItemCategory,
  VaultCategoryOverview,
} from './definitions';

export default async function createVaultItemCategoryHelper(
  overview: VaultCategoryOverview,
  vaultKey: string,
): Promise<EncryptedVaultItemCategory> {
  return encryption.vaults.categories.encryptVaultItemCategory(
    overview,
    vaultKey,
  );
}
