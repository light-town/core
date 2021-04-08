import { EncryptedSymmetricKey } from './encryptBySecretKey';
export declare const decryptBySecretKey: (encryptedSymmetricKey: EncryptedSymmetricKey, secretKey: string) => Promise<string>;
export default decryptBySecretKey;
