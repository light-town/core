import { PublicKey, PrivateKey } from '../../encryption/common/rsa/definitions';
import { EncryptedPrivateKeyBySymmetricKey } from '../../encryption/keySets/privateKey/definitions';
import {
  EncryptedSymmetricKeyByPublicKey,
  EncryptedSymmetricKeyBySecretKey,
} from '../../encryption/keySets/symmetricKey/definitions';

export class EncryptedKeySet {
  encSymmetricKey: EncryptedSymmetricKeyByPublicKey;
}

export class EncryptedPrimaryKeySet {
  publicKey: string;
  encPrivateKey: EncryptedPrivateKeyBySymmetricKey;
  encSymmetricKey: EncryptedSymmetricKeyBySecretKey;
}

export class DecryptedKeySet {
  symmetricKey: string;
}

export class DecryptedPrimaryKeySet {
  publicKey: PublicKey;
  privateKey: PrivateKey;
  symmetricKey: string;
}
