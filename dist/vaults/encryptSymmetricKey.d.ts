export declare class Options {
    symmetricKey: string;
    secretKey: string;
}
export declare class EncryptedSymmetricKey {
    enc: string;
    tag: string;
    iv: string;
    tagLength: number;
    key: string;
    iterations: number;
    salt: string;
}
export declare const encryptSymmetricKey: (options: Options) => {
    enc: string;
    tagLength: number;
    tag: string;
    key: string;
    iv: string;
};
