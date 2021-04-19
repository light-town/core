import aes from '../../common/aes';
import { EncryptedVaultFolder } from './definitions';

export default async function encryptVaultFolder(
  overview: Record<string, any>,
  vaultKey: string,
): Promise<EncryptedVaultFolder> {
  return {
    encOverview: await aes.encrypt(JSON.stringify(overview), vaultKey),
  };
}
