export class EncryptedSymmetricKeyByPublicKey {
  kty: string;
  alg: string;
  key: string;
}

export class EncryptedSymmetricKeyBySecretKey {
  kty: string;
  alg: string;
  key: string;
  tag: string;
  tagLength: number;
  iv: string;
  salt: string;
}
