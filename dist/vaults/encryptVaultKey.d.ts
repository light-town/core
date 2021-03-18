import * as forge from 'node-forge';
export declare class EncryptedVaultKey {
    alg: 'RSA-OAEP-256';
    kty: 'RSA';
    key: string;
}
export declare const encryptVaultKey: (vaultKey: string, publicKey: forge.pki.rsa.PublicKey) => EncryptedVaultKey;
export default encryptVaultKey;
