import encryption from '../../encryption';
import { EncryptedVaultFolder, DecryptedVaultFolder } from './definitions';

export default async function decryptVaultFoldersHelper(
  encVaultFolders: EncryptedVaultFolder[],
  vaultKey: string,
): Promise<DecryptedVaultFolder[]> {
  return Promise.all(
    encVaultFolders.map((encVaultFolder) =>
      encryption.vaults.folders
        .decryptVaultFolder(encVaultFolder, vaultKey)
        .then((vaultFolder) => {
          const result = {
            ...vaultFolder,
            ...encVaultFolder,
          };

          delete result.encOverview;

          return result;
        }),
    ),
  );
}
