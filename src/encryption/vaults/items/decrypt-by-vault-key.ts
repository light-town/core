import { EncryptedData } from '../../common/aes/definitions';
import aes from '../../common/aes';
import utf8 from '../../common/utf-8';
import { EncryptedVaultItem, DecryptedVaultItem } from './definitions';

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

export default async function decryptVaultItem(
  encryptedVaultItem: EncryptedVaultItem,
  vaultKey: string,
): Promise<DecryptedVaultItem> {
  const [overview, details] = await Promise.all([
    decryptOverviewByVaultKey(encryptedVaultItem.encOverview, vaultKey),
    encryptedVaultItem.encDetails
      ? decryptDetailsByVaultKey(encryptedVaultItem.encDetails, vaultKey)
      : undefined,
  ]);

  return {
    overview,
    details,
  };
}
