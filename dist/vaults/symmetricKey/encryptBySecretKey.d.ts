export declare class EncryptedSymmetricKey {
    kty: string;
    alg: string;
    key: string;
    tag: string;
    tagLength: number;
    iv: string;
    salt: string;
}
export declare const encryptBySecretKey: (symmetricKey: string, secretKey: string, salt: string) => Promise<EncryptedSymmetricKey>;
export default encryptBySecretKey;
