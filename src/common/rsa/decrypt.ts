import * as forge from 'node-forge';
import base64 from '../../common/base64';
import { EncryptedData } from './encrypt';

export type PrivateKey = forge.pki.rsa.PrivateKey;

export const decrypt = (
  data: EncryptedData,
  privateKey: PrivateKey,
): Promise<string> => {
  return Promise.resolve(
    privateKey.decrypt(base64.decode(data.data), 'RSA-OAEP', {
      md: forge.md.sha256.create(),
    }),
  );
};

export default decrypt;
