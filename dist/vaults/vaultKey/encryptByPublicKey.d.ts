import * as forge from 'node-forge';
export declare class EncryptedVaultKey {
    kty: string;
    alg: string;
    key: string;
}
export declare const encryptByPublicKey: (vaultKey: string, publicKey: forge.pki.rsa.PublicKey) => Promise<EncryptedVaultKey>;
export default encryptByPublicKey;
