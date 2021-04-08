import * as forge from 'node-forge';
export declare class EncryptedTeamKey {
    kty: string;
    alg: string;
    key: string;
}
export declare const encryptByPublicKey: (teamKey: string, publicKey: forge.pki.rsa.PublicKey) => Promise<EncryptedTeamKey>;
export default encryptByPublicKey;
