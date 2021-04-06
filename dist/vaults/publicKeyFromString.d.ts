import * as forge from 'node-forge';
export declare const publicKeyFromString: (pem: string) => forge.pki.rsa.PublicKey;
export default publicKeyFromString;
