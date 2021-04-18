import encryption from '../../encryption';
import {
  EncryptedVaultItemCategory,
  DecryptedVaultItemCategory,
} from './definitions';

export default async function decryptVaultItemCategoryHelper(
  encVaultCategory: EncryptedVaultItemCategory,
  vaultKey: string,
): Promise<DecryptedVaultItemCategory> {
  return encryption.vaults.categories.decryptVaultItemCategory(
    encVaultCategory,
    vaultKey,
  );
}
