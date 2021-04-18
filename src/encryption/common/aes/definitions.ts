export class EncryptedData {
  kty: string;
  alg: string;
  data: string;
  tag: string;
  tagLength: number;
  iv: string;
}
