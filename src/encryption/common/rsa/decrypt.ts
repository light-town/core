import * as forge from 'node-forge';
import base64 from '../base64';
import { EncryptedData, PrivateKey } from './definitions';

export default function decrypt(
  data: EncryptedData,
  privateKey: PrivateKey,
): Promise<string> {
  return Promise.resolve(
    privateKey.decrypt(base64.decode(data.data), 'RSA-OAEP', {
      md: forge.md.sha256.create(),
    }),
  );
}
