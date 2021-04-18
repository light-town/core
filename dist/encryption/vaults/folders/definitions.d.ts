import { EncryptedData } from '../../common/aes/definitions';
export declare class EncryptedVaultFolder {
    encOverview: EncryptedData;
}
export declare class DecryptedVaultFolder<Overview = Record<string, any>> {
    overview: Overview;
}
