import * as forge from 'node-forge';
export declare class EncryptedPrivateKey {
    kty: string;
    alg: string;
    key: string;
}
export declare const encryptBySymmetricKey: (privateKey: forge.pki.PrivateKey, symmetricKey: string) => Promise<EncryptedPrivateKey>;
export default encryptBySymmetricKey;
