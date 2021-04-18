import encryption from '../../encryption';
import { EncryptedVaultFolder, DecryptedVaultFolder } from './definitions';

export default async function decryptVaultFolderHelper(
  encVaultFolder: EncryptedVaultFolder,
  vaultKey: string,
): Promise<DecryptedVaultFolder> {
  return encryption.vaults.folders.decryptVaultFolder(encVaultFolder, vaultKey);
}
