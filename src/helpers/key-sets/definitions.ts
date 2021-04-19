import { PublicKey, PrivateKey } from '../../encryption/common/rsa/definitions';
import { EncryptedPrivateKeyBySymmetricKey } from '../../encryption/key-sets/private-key/definitions';
import {
  EncryptedSymmetricKeyByPublicKey,
  EncryptedSymmetricKeyBySecretKey,
} from '../../encryption/key-sets/symmetric-key/definitions';

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
