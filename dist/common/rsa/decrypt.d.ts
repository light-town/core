import * as forge from 'node-forge';
import { EncryptedData } from './encrypt';
export declare type PrivateKey = forge.pki.rsa.PrivateKey;
export declare const decrypt: (data: EncryptedData, privateKey: PrivateKey) => Promise<string>;
export default decrypt;
