export class EncryptedTeamKeyBySecretKey {
  kty: string;
  alg: string;
  key: string;
  tag: string;
  tagLength: number;
  iv: string;
}

export class EncryptedTeamKeyByPublicKey {
  kty: string;
  alg: string;
  key: string;
}
