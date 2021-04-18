import { EncryptedVaultFolder, DecryptedVaultFolder } from './definitions';
export default function decryptVaultFoldersHelper(encVaultFolders: EncryptedVaultFolder[], vaultKey: string): Promise<DecryptedVaultFolder[]>;
