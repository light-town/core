import * as forge from 'node-forge';
import { EncryptedVaultKey } from './encryptByPublicKey';
export declare const decryptByPrivateKey: (encryptedVaultKey: EncryptedVaultKey, privateKey: forge.pki.rsa.PrivateKey) => Promise<string>;
export default decryptByPrivateKey;
