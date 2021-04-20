import encryption from '../../encryption';
import { EncryptedVaultFolder, DecryptedVaultFolder } from './definitions';

export default async function decryptVaultFolderHelper(
  encVaultFolder: EncryptedVaultFolder,
  vaultKey: string,
): Promise<DecryptedVaultFolder> {
  const vaultFolder = await encryption.vaults.folders.decryptVaultFolder(
    encVaultFolder,
    vaultKey,
  );

  const result = {
    ...vaultFolder,
    ...encVaultFolder,
  };

  delete result.encOverview;

  return result;
}
