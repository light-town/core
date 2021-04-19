import * as forge from 'node-forge';
import base64 from '../base64';
import generateRandomSalt from '../generate-random-salt';
import { EncryptedData } from './definitions';

export default function encrypt(
  data: string,
  key: string,
): Promise<EncryptedData> {
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
  cipher.update(forge.util.createBuffer(data));
  cipher.finish();

  return Promise.resolve({
    kty: 'AES',
    alg: 'AES-GCM-256',
    data: base64.encode(cipher.output.getBytes()),
    iv: base64.encode(iv),
    tag: base64.encode(cipher.mode.tag.getBytes()),
    tagLength,
  });
}
