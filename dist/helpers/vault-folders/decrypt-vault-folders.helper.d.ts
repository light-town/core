import { EncryptedVaultFolder, DecryptedVaultFolder } from './definitions';
export default function decryptVaultFolderHelper(encVaultFolder: EncryptedVaultFolder, vaultKey: string): Promise<DecryptedVaultFolder>;
