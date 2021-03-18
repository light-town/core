import * as forge from 'node-forge';
export declare const generateKeyPair: () => Promise<forge.pki.rsa.KeyPair>;
export default generateKeyPair;
