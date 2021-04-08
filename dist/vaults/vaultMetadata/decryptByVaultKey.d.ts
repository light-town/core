import { EncryptedData } from '../../common/aes/encrypt';
export declare const decryptByVaultKey: (metadata: EncryptedData, vaultKey: string) => Promise<Record<string, any>>;
export default decryptByVaultKey;
