import { EncryptedData } from '../../common/aes/encrypt';
import { EncryptedVaultItem } from './encryptByVaultKey';
export declare class DecryptedVaultItem {
    overview: Record<string, any>;
    details: Record<string, any>;
}
export declare const decryptOverviewByVaultKey: (encryptedOverview: EncryptedData, vaultKey: string) => Promise<Record<string, any>>;
export declare const decryptDetailsByVaultKey: (encryptedDetails: EncryptedData, vaultKey: string) => Promise<Record<string, any>>;
export declare const decryptVaultItem: (encryptedVaultItem: EncryptedVaultItem, vaultKey: string) => Promise<DecryptedVaultItem>;
export default decryptVaultItem;
