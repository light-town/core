import { PublicKey, PrivateKey } from '../../encryption/common/rsa/definitions';
import { EncryptedPrivateKeyBySymmetricKey } from '../../encryption/key-sets/private-key/definitions';
import { EncryptedSymmetricKeyByPublicKey, EncryptedSymmetricKeyBySecretKey } from '../../encryption/key-sets/symmetric-key/definitions';
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
