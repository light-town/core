import encryption from '../../encryption';
import { EncryptedVaultFolder, DecryptedVaultFolder } from './definitions';

export default async function decryptVaultFoldersHelper(
  encVaultFolders: EncryptedVaultFolder[],
  vaultKey: string,
): Promise<DecryptedVaultFolder[]> {
  return Promise.all(
    encVaultFolders.map((f) =>
      encryption.vaults.folders.decryptVaultFolder(f, vaultKey),
    ),
  );
}
