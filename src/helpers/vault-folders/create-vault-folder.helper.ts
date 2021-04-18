import encryption from '../../encryption';
import { EncryptedVaultFolder, VaultFolderOverview } from './definitions';

export default async function createVaultFolderHelper(
  overview: VaultFolderOverview,
  vaultKey: string,
): Promise<EncryptedVaultFolder> {
  return encryption.vaults.folders.encryptVaultFolder(overview, vaultKey);
}
