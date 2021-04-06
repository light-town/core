export declare class EncryptedData {
    kty: string;
    alg: string;
    data: string;
    tag: string;
    tagLength: number;
    iv: string;
}
export declare const encrypt: (key: string, data: Record<string, any>) => Promise<EncryptedData>;
export default encrypt;
