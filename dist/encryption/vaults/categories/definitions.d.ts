import { EncryptedData } from '../../common/aes/definitions';
export declare class EncryptedVaultItemCategory {
    encOverview: EncryptedData;
}
export declare class DecryptedVaultItemCategory<Overview = Record<string, any>> {
    overview: Overview;
}
