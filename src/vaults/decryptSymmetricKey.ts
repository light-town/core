import * as forge from 'node-forge';
import base64 from '../common/base64';

export class Options {
  encryptedSymmetricKey: string;
  secretKey: string;
  iv: string;
  tag: string;
  tagLength: number;
}

export const retrieveBufferFromBase64 = (base64Value) =>
  forge.util.createBuffer(base64.decode(base64Value));

/**
 *
 * @param {Options} options Options for decrypt symmetric key
 * @returns Promise with decrypted Symmetric Key
 * @throws Fail to decrypt symmetric key
 */
export const decryptSymmetricKey = (options: Options): Promise<string> => {
  const key = forge.util.createBuffer(forge.util.hexToBytes(options.secretKey));

  const decipher = forge.cipher.createDecipher('AES-GCM', key);
  decipher.start({
    iv: base64.decode(options.iv),
    tagLength: options.tagLength,
    tag: retrieveBufferFromBase64(options.tag),
  });
  decipher.update(retrieveBufferFromBase64(options.encryptedSymmetricKey));

  const pass = decipher.finish();

  if (pass) {
    const decryptedSymmetricKey = decipher.output.getBytes();
    return Promise.resolve(decryptedSymmetricKey);
  }
  return Promise.reject(new Error(`Fail to decrypt symmetric key`));
};
