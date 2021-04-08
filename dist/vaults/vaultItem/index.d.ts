import { encryptVaultItem, encryptOverviewByVaultKey, encryptDetailsByVaultKey } from './encryptByVaultKey';
import { decryptVaultItem, decryptOverviewByVaultKey, decryptDetailsByVaultKey } from './decryptByVaultKey';
export { encryptVaultItem, encryptOverviewByVaultKey, encryptDetailsByVaultKey, decryptVaultItem, decryptOverviewByVaultKey, decryptDetailsByVaultKey, };
declare const _default: {
    encryptVaultItem: (overview: Record<string, any>, details: Record<string, any>, vaultKey: string) => Promise<import("./encryptByVaultKey").EncryptedVaultItem>;
    encryptOverviewByVaultKey: (overview: Record<string, any>, vaultKey: string) => Promise<import("../../common/aes/encrypt").EncryptedData>;
    encryptDetailsByVaultKey: (details: Record<string, any>, vaultKey: string) => Promise<import("../../common/aes/encrypt").EncryptedData>;
    decryptVaultItem: (encryptedVaultItem: import("./encryptByVaultKey").EncryptedVaultItem, vaultKey: string) => Promise<import("./decryptByVaultKey").DecryptedVaultItem>;
    decryptOverviewByVaultKey: (encryptedOverview: import("../../common/aes/encrypt").EncryptedData, vaultKey: string) => Promise<Record<string, any>>;
    decryptDetailsByVaultKey: (encryptedDetails: import("../../common/aes/encrypt").EncryptedData, vaultKey: string) => Promise<Record<string, any>>;
};
export default _default;
