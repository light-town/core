import { EncryptedData } from '../../common/aes/definitions';
export declare class EncryptedVaultItemCategory {
    encOverview: EncryptedData;
    encDetails?: EncryptedData;
}
export declare class DecryptedVaultItemCategory<Overview = Record<string, any>, Details = Record<string, any>> {
    overview: Overview;
    details?: Details;
}
