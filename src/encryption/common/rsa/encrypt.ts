import * as forge from 'node-forge';
import base64 from '../base64';
import { EncryptedData, PublicKey } from './definitions';

export default function encrypt(
  data: string,
  publicKey: PublicKey,
): Promise<EncryptedData> {
  const encryptedVaultKey = publicKey.encrypt(data, 'RSA-OAEP', {
    md: forge.md.sha256.create(),
  });

  return Promise.resolve({
    kty: 'RSA',
    alg: 'RSA-OAEP-256',
    data: base64.encode(encryptedVaultKey),
  });
}
