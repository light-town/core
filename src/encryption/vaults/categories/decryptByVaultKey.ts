import aes from '../../common/aes';
import {
  EncryptedVaultItemCategory,
  DecryptedVaultItemCategory,
} from './definitions';

export default async function decryptVaultItemCategory(
  encryptedVaultItemCategory: EncryptedVaultItemCategory,
  vaultKey: string,
): Promise<DecryptedVaultItemCategory> {
  return {
    overview: JSON.parse(
      await aes.decrypt(encryptedVaultItemCategory.encOverview, vaultKey),
    ),
  };
}
