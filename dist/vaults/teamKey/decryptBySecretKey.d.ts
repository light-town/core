import { EncryptedTeamKey } from './encryptBySecretKey';
export declare const decryptBySecretKey: (encryptedTeamKey: EncryptedTeamKey, secretKey: string) => Promise<string>;
export default decryptBySecretKey;
