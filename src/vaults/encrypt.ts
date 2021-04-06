import * as forge from 'node-forge';
import base64 from '../common/base64';
import { generateRandomSalt } from '../common';

export class EncryptedData {
  kty: string;
  alg: string;
  data: string;
  tag: string;
  tagLength: number;
  iv: string;
}

export const encrypt = (
  key: string,
  data: Record<string, any>,
): Promise<EncryptedData> => {
  const iv = generateRandomSalt(12);
  const tagLength = 128;

  const cipher = forge.cipher.createCipher(
    'AES-GCM',
    forge.util.createBuffer(forge.util.hexToBytes(key)),
  );
  cipher.start({
    iv,
    tagLength,
  });
  cipher.update(forge.util.createBuffer(JSON.stringify(data)));
  cipher.finish();

  return Promise.resolve({
    kty: 'AES',
    alg: 'AES-GCM-256',
    data: base64.encode(cipher.output.getBytes()),
    iv: base64.encode(iv),
    tag: base64.encode(cipher.mode.tag.getBytes()),
    tagLength,
  });
};

export default encrypt;
