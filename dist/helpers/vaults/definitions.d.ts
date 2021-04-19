import { EncryptedData } from '../../encryption/common/aes/definitions';
import { EncryptedVaultKeyByPublicKey, EncryptedVaultKeyBySecretKey } from '../../encryption/vaults/key/definitions';
export declare class VaultOverview {
    name: string;
    desc?: string;
    [key: string]: any;
}
export declare class EncryptedVault {
    encKey: EncryptedVaultKeyByPublicKey | EncryptedVaultKeyBySecretKey;
    encOverview: EncryptedData;
}
export declare class DecryptedVault {
    key: string;
    overview: VaultOverview;
}
