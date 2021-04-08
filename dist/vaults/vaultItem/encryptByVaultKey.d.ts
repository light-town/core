import { EncryptedData } from '../../common/aes/encrypt';
export declare class EncryptedVaultItem {
    encOverview: EncryptedData;
    encDetails: EncryptedData;
}
export declare const encryptOverviewByVaultKey: (overview: Record<string, any>, vaultKey: string) => Promise<EncryptedData>;
export declare const encryptDetailsByVaultKey: (details: Record<string, any>, vaultKey: string) => Promise<EncryptedData>;
export declare const encryptVaultItem: (overview: Record<string, any>, details: Record<string, any>, vaultKey: string) => Promise<EncryptedVaultItem>;
export default encryptVaultItem;
