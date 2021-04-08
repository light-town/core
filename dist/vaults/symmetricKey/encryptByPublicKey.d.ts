import { PublicKey } from '../../common/rsa/encrypt';
export declare class EncryptedSymmetricKey {
    kty: string;
    alg: string;
    key: string;
}
export declare const encryptByPublicKey: (symmetricKey: string, publicKey: PublicKey) => Promise<EncryptedSymmetricKey>;
export default encryptByPublicKey;
