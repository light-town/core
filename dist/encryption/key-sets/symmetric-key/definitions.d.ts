export declare class EncryptedSymmetricKeyByPublicKey {
    kty: string;
    alg: string;
    key: string;
}
export declare class EncryptedSymmetricKeyBySecretKey {
    kty: string;
    alg: string;
    key: string;
    tag: string;
    tagLength: number;
    iv: string;
    salt: string;
}
