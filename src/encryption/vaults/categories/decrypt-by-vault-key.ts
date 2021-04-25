import { EncryptedData } from '../../common/aes/definitions';
import aes from '../../common/aes';
import utf8 from '../../common/utf-8';
import {
  EncryptedVaultItemCategory,
  DecryptedVaultItemCategory,
} from './definitions';

export async function decryptOverviewByVaultKey(
  encryptedOverview: EncryptedData,
  vaultKey: string,
): Promise<Record<string, any>> {
  return JSON.parse(
    utf8.decode(await aes.decrypt(encryptedOverview, vaultKey)),
  );
}

export async function decryptDetailsByVaultKey(
  encryptedDetails: EncryptedData,
  vaultKey: string,
): Promise<Record<string, any>> {
  return JSON.parse(utf8.decode(await aes.decrypt(encryptedDetails, vaultKey)));
}

export default async function decryptVaultItemCategory(
  encryptedVaultItemCategory: EncryptedVaultItemCategory,
  vaultKey: string,
): Promise<DecryptedVaultItemCategory> {
  const [overview, details] = await Promise.all([
    decryptOverviewByVaultKey(encryptedVaultItemCategory.encOverview, vaultKey),
    encryptedVaultItemCategory.encDetails
      ? decryptDetailsByVaultKey(
          encryptedVaultItemCategory.encDetails,
          vaultKey,
        )
      : undefined,
  ]);

  return {
    overview,
    details,
  };
}
