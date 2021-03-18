import * as forge from 'node-forge';

export class Options {
  encryptedSymmetricKey: string;
  masterUnlockKey: string;
  iv: string;
  tag: string;
  tagLength: number;
}

export const retrieveBufferFromBase64 = (base64Value) =>
  forge.util.createBuffer(forge.util.decode64(base64Value));

/**
 *
 * @param {Options} options Options for decrypt symmetric key
 * @returns Promise with decrypted Symmetric Key
 * @throws Fail to decrypt symmetric key
 */
export const decryptSymmetricKey = (options: Options): Promise<string> => {
  const key = forge.util.createBuffer(options.masterUnlockKey);

  const decipher = forge.cipher.createDecipher('AES-GCM', key);
  decipher.start({
    iv: forge.util.hexToBytes(options.iv),
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
