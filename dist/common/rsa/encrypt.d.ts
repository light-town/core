import * as forge from 'node-forge';
export declare type PublicKey = forge.pki.rsa.PublicKey;
export declare class EncryptedData {
    kty: string;
    alg: string;
    data: string;
}
export declare const encrypt: (data: string, publicKey: PublicKey) => Promise<EncryptedData>;
export default encrypt;
