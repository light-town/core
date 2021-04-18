import { EncryptedVaultFolder, DecryptedVaultFolder } from './definitions';
export default function decryptVaultFolder(encryptedVaultFolder: EncryptedVaultFolder, vaultKey: string): Promise<DecryptedVaultFolder>;
