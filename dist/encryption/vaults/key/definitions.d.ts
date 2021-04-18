export declare class EncryptedVaultKeyByPublicKey {
    kty: string;
    alg: string;
    key: string;
}
export declare class EncryptedVaultKeyBySecretKey {
    kty: string;
    alg: string;
    key: string;
    tag: string;
    tagLength: number;
    iv: string;
}
