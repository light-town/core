export declare class EncryptedVaultKey {
    kty: string;
    alg: string;
    key: string;
    tag: string;
    tagLength: number;
    iv: string;
}
export declare const encryptBySecretKey: (vaultKey: string, secretKey: string) => Promise<EncryptedVaultKey>;
export default encryptBySecretKey;
