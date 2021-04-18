import { EncryptedVaultFolder, VaultFolderOverview } from './definitions';
export default function createVaultFolderHelper(overview: VaultFolderOverview, vaultKey: string): Promise<EncryptedVaultFolder>;
