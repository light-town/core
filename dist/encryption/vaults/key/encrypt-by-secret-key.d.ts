import { EncryptedVaultKeyBySecretKey } from './definitions';
export declare const encryptBySecretKey: (vaultKey: string, secretKey: string) => Promise<EncryptedVaultKeyBySecretKey>;
export default encryptBySecretKey;
