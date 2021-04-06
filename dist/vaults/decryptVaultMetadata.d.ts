import { EncryptedData } from './encrypt';
export declare const decryptVaultMetadata: (vaultKey: string, metadata: EncryptedData) => Promise<Record<string, any>>;
export default decryptVaultMetadata;
