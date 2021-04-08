import * as forge from 'node-forge';
import { EncryptedTeamKey } from './encryptByPublicKey';
export declare const decryptByPrivateKey: (encryptedTeamKey: EncryptedTeamKey, privateKey: forge.pki.rsa.PrivateKey) => Promise<string>;
export default decryptByPrivateKey;
