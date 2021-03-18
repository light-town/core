import * as forge from 'node-forge';
export declare const decryptPrivateKey: (encryptedPrivateKey: string, symmetricKey: string) => forge.pki.rsa.PrivateKey;
export default decryptPrivateKey;
