import aes from '../../common/aes';
import utf8 from '../../common/utf-8';
import { EncryptedVaultFolder, DecryptedVaultFolder } from './definitions';

export default async function decryptVaultFolder(
  encryptedVaultFolder: EncryptedVaultFolder,
  vaultKey: string,
): Promise<DecryptedVaultFolder> {
  return {
    overview: JSON.parse(
      utf8.decode(
        await aes.decrypt(encryptedVaultFolder.encOverview, vaultKey),
      ),
    ),
  };
}
