import * as forge from 'node-forge';
import base64 from '../common/base64';
import { generateRandomSalt } from '../common';

export class Options {
  symmetricKey: string;
  secretKey: string;
  salt: string;
}

export class EncryptedSymmetricKey {
  kty: string;
  alg: string;
  key: string;
  tag: string;
  tagLength: number;
  iv: string;
  salt: string;
}

/**
 * @description Encrypt Symmetric Key with Master Unlock Key
 * @param {Options} options
 * @returns {EncryptedSymmetricKey}
 */
export const encryptSymmetricKey = (
  options: Options,
): EncryptedSymmetricKey => {
  const iv = generateRandomSalt(12);
  const tagLength = 128;

  const cipher = forge.cipher.createCipher(
    'AES-GCM',
    forge.util.createBuffer(forge.util.hexToBytes(options.secretKey)),
  );

  cipher.start({
    iv,
    tagLength,
  });
  cipher.update(forge.util.createBuffer(options.symmetricKey));
  cipher.finish();

  return {
    kty: 'AES',
    alg: 'AES-GCM-256',
    tagLength,
    tag: base64.encode(cipher.mode.tag.getBytes()),
    key: base64.encode(cipher.output.getBytes()),
    iv: base64.encode(iv),
    salt: options.salt,
  };
};
