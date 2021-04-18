import { EncryptedData } from '../../common/aes/definitions';
export declare class EncryptedVaultItem {
    encOverview: EncryptedData;
    encDetails?: EncryptedData;
}
export declare class DecryptedVaultItem<Overview = Record<string, any>, Details = Record<string, any>> {
    overview: Overview;
    details?: Details;
}
