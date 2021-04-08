import * as forge from 'node-forge';
import { EncryptedPrivateKey } from './encryptBySymmetricKey';
export declare const decryptBySymmetricKey: (encryptedPrivateKey: EncryptedPrivateKey, symmetricKey: string) => Promise<forge.pki.rsa.PrivateKey>;
export default decryptBySymmetricKey;
