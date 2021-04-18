import { DecryptedVaultItem, EncryptedVaultItem } from './definitions';
export default function decryptVaultItemsHelper(encVaultItems: EncryptedVaultItem[], vaultKey: string): Promise<DecryptedVaultItem[]>;
