import aes from '../../common/aes';
import utf8 from '../../common/utf-8';
import { EncryptedData } from '../../common/aes/definitions';
import { EncryptedVaultItem } from './definitions';

export function encryptOverviewByVaultKey(
  overview: Record<string, any>,
  vaultKey: string,
): Promise<EncryptedData> {
  return aes.encrypt(utf8.encode(JSON.stringify(overview)), vaultKey);
}

export function encryptDetailsByVaultKey(
  details: Record<string, any>,
  vaultKey: string,
): Promise<EncryptedData> {
  return aes.encrypt(utf8.encode(JSON.stringify(details)), vaultKey);
}

export default async function encryptVaultItem(
  overview: Record<string, any>,
  details: Record<string, any>,
  vaultKey: string,
): Promise<EncryptedVaultItem> {
  const [encOverview, encDetails] = await Promise.all([
    encryptOverviewByVaultKey(overview, vaultKey),
    encryptDetailsByVaultKey(details, vaultKey),
  ]);

  return {
    encOverview,
    encDetails,
  };
}
