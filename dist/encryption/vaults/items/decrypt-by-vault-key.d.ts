import { EncryptedData } from '../../common/aes/definitions';
import { EncryptedVaultItem, DecryptedVaultItem } from './definitions';
export declare function decryptOverviewByVaultKey(encryptedOverview: EncryptedData, vaultKey: string): Promise<Record<string, any>>;
export declare function decryptDetailsByVaultKey(encryptedDetails: EncryptedData, vaultKey: string): Promise<Record<string, any>>;
export default function decryptVaultItem(encryptedVaultItem: EncryptedVaultItem, vaultKey: string): Promise<DecryptedVaultItem>;
