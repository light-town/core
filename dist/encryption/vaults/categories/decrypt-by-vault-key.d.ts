import { EncryptedData } from '../../common/aes/definitions';
import { EncryptedVaultItemCategory, DecryptedVaultItemCategory } from './definitions';
export declare function decryptOverviewByVaultKey(encryptedOverview: EncryptedData, vaultKey: string): Promise<Record<string, any>>;
export declare function decryptDetailsByVaultKey(encryptedDetails: EncryptedData, vaultKey: string): Promise<Record<string, any>>;
export default function decryptVaultItemCategory(encryptedVaultItemCategory: EncryptedVaultItemCategory, vaultKey: string): Promise<DecryptedVaultItemCategory>;
