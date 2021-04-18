import * as forge from 'node-forge';
export declare type PublicKey = forge.pki.rsa.PublicKey;
export declare type PrivateKey = forge.pki.rsa.PrivateKey;
export declare class EncryptedData {
    kty: string;
    alg: string;
    data: string;
}
