import * as forge from 'node-forge';
import { generateRandomSalt } from '~/common';

export class Options {
  symmetricKey: string;
  masterUnlockKey: string;
  iterations: number;
  salt: string;
}

export class EncryptedSymmetricKey {
  enc: string;
  tag: string;
  iv: string;
  tagLength: number;
  key: string;
  iterations: number;
  salt: string;
}

/**
 * @description Encrypt Symmetric Key with Master Unlock Key
 * @param {Options} options
 * @returns {EncryptedSymmetricKey}
 */
export const encryptSymmetricKey = (options: Options) => {
  const iv = generateRandomSalt(12);
  const tagLength = 128;

  const cipher = forge.cipher.createCipher(
    'AES-GCM',
    forge.util.createBuffer(options.masterUnlockKey),
  );

  cipher.start({
    iv,
    tagLength,
  });
  cipher.update(forge.util.createBuffer(options.symmetricKey));
  cipher.finish();

  const encryptedSymmetricKey = cipher.output;
  const encSymKey = {
    enc: 'A256GCM',
    tagLength,
    tag: forge.util.encode64(cipher.mode.tag.getBytes()),
    key: forge.util.encode64(encryptedSymmetricKey.getBytes()),
    iv: forge.util.bytesToHex(iv),
    iterations: options.iterations,
    salt: options.salt,
  };
  return encSymKey;
};
