import { EncryptedData } from '../../common/aes/encrypt';
import decryptAes from '../../common/aes/decrypt';
import { EncryptedVaultItem } from './encryptByVaultKey';

export class DecryptedVaultItem {
  overview: Record<string, any>;
  details: Record<string, any>;
}

export const decryptOverviewByVaultKey = async (
  encryptedOverview: EncryptedData,
  vaultKey: string,
): Promise<Record<string, any>> => {
  return JSON.parse(await decryptAes(encryptedOverview, vaultKey));
};

export const decryptDetailsByVaultKey = async (
  encryptedDetails: EncryptedData,
  vaultKey: string,
): Promise<Record<string, any>> => {
  return JSON.parse(await decryptAes(encryptedDetails, vaultKey));
};

export const decryptVaultItem = async (
  encryptedVaultItem: EncryptedVaultItem,
  vaultKey: string,
): Promise<DecryptedVaultItem> => {
  const vaultItem = await Promise.all([
    decryptOverviewByVaultKey(encryptedVaultItem.encOverview, vaultKey),
    decryptDetailsByVaultKey(encryptedVaultItem.encDetails, vaultKey),
  ]);

  return {
    overview: vaultItem[0],
    details: vaultItem[1],
  };
};

export default decryptVaultItem;
