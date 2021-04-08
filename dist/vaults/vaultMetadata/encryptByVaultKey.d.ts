import { EncryptedData } from '../../common/aes/encrypt';
export declare const encryptByVaultKey: (metadata: Record<string, any>, vaultKey: string) => Promise<EncryptedData>;
export default encryptByVaultKey;
