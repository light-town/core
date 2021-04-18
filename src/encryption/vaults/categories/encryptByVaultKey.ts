import aes from '../../common/aes/';
import { EncryptedVaultItemCategory } from './definitions';

export default async function encryptVaultItem(
  overview: Record<string, any>,
  vaultKey: string,
): Promise<EncryptedVaultItemCategory> {
  return {
    encOverview: await aes.encrypt(JSON.stringify(overview), vaultKey),
  };
}
