import * as forge from 'node-forge';

export type PublicKey = forge.pki.rsa.PublicKey;
export type PrivateKey = forge.pki.rsa.PrivateKey;

export class EncryptedData {
  kty: string;
  alg: string;
  data: string;
}
