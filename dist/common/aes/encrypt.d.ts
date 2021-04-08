export declare class EncryptedData {
    kty: string;
    alg: string;
    data: string;
    tag: string;
    tagLength: number;
    iv: string;
}
export declare const encrypt: (data: string, key: string) => Promise<EncryptedData>;
export default encrypt;
