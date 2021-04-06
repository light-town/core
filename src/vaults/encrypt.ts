import * as forge from 'node-forge';
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
    data: forge.util.encode64(cipher.output.getBytes()),
    iv: forge.util.bytesToHex(iv),
    tag: forge.util.encode64(cipher.mode.tag.getBytes()),
    tagLength,
  });
};

export default encrypt;
