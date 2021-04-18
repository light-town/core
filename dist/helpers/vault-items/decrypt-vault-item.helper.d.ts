import { DecryptedVaultItem, EncryptedVaultItem } from './definitions';
export default function decryptVaultItemHelper(encVaultItem: EncryptedVaultItem, vaultKey: string): Promise<DecryptedVaultItem>;
