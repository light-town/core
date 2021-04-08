import { EncryptedVaultKey } from './encryptBySecretKey';
export declare const decryptBySecretKey: (encryptedVaultKey: EncryptedVaultKey, secretKey: string) => Promise<string>;
export default decryptBySecretKey;
