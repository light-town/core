import aes from '../../common/aes';
import { EncryptedVaultFolder, DecryptedVaultFolder } from './definitions';

export default async function decryptVaultFolder(
  encryptedVaultFolder: EncryptedVaultFolder,
  vaultKey: string,
): Promise<DecryptedVaultFolder> {
  return {
    overview: JSON.parse(
      await aes.decrypt(encryptedVaultFolder.encOverview, vaultKey),
    ),
  };
}
