import * as forge from 'node-forge';
import base64 from '../../common/base64';

export type PublicKey = forge.pki.rsa.PublicKey;

export class EncryptedData {
  kty: string;
  alg: string;
  data: string;
}

export const encrypt = (
  data: string,
  publicKey: PublicKey,
): Promise<EncryptedData> => {
  const encryptedVaultKey = publicKey.encrypt(data, 'RSA-OAEP', {
    md: forge.md.sha256.create(),
  });

  return Promise.resolve({
    kty: 'RSA',
    alg: 'RSA-OAEP-256',
    data: base64.encode(encryptedVaultKey),
  });
};

export default encrypt;
