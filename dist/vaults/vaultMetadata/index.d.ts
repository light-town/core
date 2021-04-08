import { encryptByVaultKey } from './encryptByVaultKey';
import { decryptByVaultKey } from './decryptByVaultKey';
export { encryptByVaultKey, decryptByVaultKey };
declare const _default: {
    encryptByVaultKey: (metadata: Record<string, any>, vaultKey: string) => Promise<import("../../common/aes/encrypt").EncryptedData>;
    decryptByVaultKey: (metadata: import("../../common/aes/encrypt").EncryptedData, vaultKey: string) => Promise<Record<string, any>>;
};
export default _default;
