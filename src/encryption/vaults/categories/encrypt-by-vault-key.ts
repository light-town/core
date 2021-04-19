import { EncryptedData } from '../../common/aes/definitions';
import aes from '../../common/aes';
import { EncryptedVaultItemCategory } from './definitions';

export function encryptOverviewByVaultKey(
  overview: Record<string, any>,
  vaultKey: string,
): Promise<EncryptedData> {
  return aes.encrypt(JSON.stringify(overview), vaultKey);
}

export function encryptDetailsByVaultKey(
  details: Record<string, any>,
  vaultKey: string,
): Promise<EncryptedData> {
  return aes.encrypt(JSON.stringify(details), vaultKey);
}

export default async function encryptVaultItemCategory(
  overview: Record<string, any>,
  details: Record<string, any>,
  vaultKey: string,
): Promise<EncryptedVaultItemCategory> {
  const [encOverview, encDetails] = await Promise.all([
    encryptOverviewByVaultKey(overview, vaultKey),
    encryptDetailsByVaultKey(details, vaultKey),
  ]);

  return {
    encOverview,
    encDetails,
  };
}
