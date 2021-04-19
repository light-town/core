import { DecryptedVault, EncryptedVault } from './definitions';
export default function shareVaultHelper(vault: DecryptedVault, secretKey: string): Promise<EncryptedVault>;
