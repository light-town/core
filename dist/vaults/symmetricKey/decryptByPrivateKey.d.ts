import { PrivateKey } from '../../common/rsa/decrypt';
import { EncryptedSymmetricKey } from './encryptByPublicKey';
export declare const decryptByPrivateKey: (encryptedSymmetricKey: EncryptedSymmetricKey, privateKey: PrivateKey) => Promise<string>;
export default decryptByPrivateKey;
