import { PublicKey, PrivateKey } from '../../encryption/common/rsa/definitions';
import { EncryptedPrivateKeyBySymmetricKey } from '../../encryption/keySets/privateKey/definitions';
import { EncryptedSymmetricKeyByPublicKey, EncryptedSymmetricKeyBySecretKey } from '../../encryption/keySets/symmetricKey/definitions';
export declare class EncryptedKeySet {
    encSymmetricKey: EncryptedSymmetricKeyByPublicKey;
}
export declare class EncryptedPrimaryKeySet {
    publicKey: string;
    encPrivateKey: EncryptedPrivateKeyBySymmetricKey;
    encSymmetricKey: EncryptedSymmetricKeyBySecretKey;
}
export declare class DecryptedKeySet {
    symmetricKey: string;
}
export declare class DecryptedPrimaryKeySet {
    publicKey: PublicKey;
    privateKey: PrivateKey;
    symmetricKey: string;
}
