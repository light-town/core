import encryptAes, { EncryptedData } from '../../common/aes/encrypt';

export class EncryptedVaultItem {
  encOverview: EncryptedData;
  encDetails: EncryptedData;
}

export const encryptOverviewByVaultKey = (
  overview: Record<string, any>,
  vaultKey: string,
): Promise<EncryptedData> => {
  return encryptAes(JSON.stringify(overview), vaultKey);
};

export const encryptDetailsByVaultKey = (
  details: Record<string, any>,
  vaultKey: string,
): Promise<EncryptedData> => {
  return encryptAes(JSON.stringify(details), vaultKey);
};

export const encryptVaultItem = async (
  overview: Record<string, any>,
  details: Record<string, any>,
  vaultKey: string,
): Promise<EncryptedVaultItem> => {
  const vaultItem = await Promise.all([
    encryptOverviewByVaultKey(overview, vaultKey),
    encryptDetailsByVaultKey(details, vaultKey),
  ]);

  return {
    encOverview: vaultItem[0],
    encDetails: vaultItem[1],
  };
};

export default encryptVaultItem;
