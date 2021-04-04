export declare class Options {
    symmetricKey: string;
    secretKey: string;
    salt: string;
}
export declare class EncryptedSymmetricKey {
    kty: string;
    alg: string;
    key: string;
    tag: string;
    tagLength: number;
    iv: string;
    salt: string;
}
export declare const encryptSymmetricKey: (options: Options) => EncryptedSymmetricKey;
