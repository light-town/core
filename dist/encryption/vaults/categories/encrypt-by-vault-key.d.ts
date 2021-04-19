import { EncryptedData } from '../../common/aes/definitions';
import { EncryptedVaultItemCategory } from './definitions';
export declare function encryptOverviewByVaultKey(overview: Record<string, any>, vaultKey: string): Promise<EncryptedData>;
export declare function encryptDetailsByVaultKey(details: Record<string, any>, vaultKey: string): Promise<EncryptedData>;
export default function encryptVaultItemCategory(overview: Record<string, any>, details: Record<string, any>, vaultKey: string): Promise<EncryptedVaultItemCategory>;
