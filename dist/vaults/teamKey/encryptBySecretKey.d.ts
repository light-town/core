export declare class EncryptedTeamKey {
    kty: string;
    alg: string;
    key: string;
    tag: string;
    tagLength: number;
    iv: string;
}
export declare const encryptBySecretKey: (teamKey: string, secretKey: string) => Promise<EncryptedTeamKey>;
export default encryptBySecretKey;
