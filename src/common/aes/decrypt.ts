import * as forge from 'node-forge';
import base64 from '../base64';
import { EncryptedData } from './encrypt';

export const retrieveBufferFromBase64 = (base64Value) =>
  forge.util.createBuffer(forge.util.decode64(base64Value));

export const decrypt = (data: EncryptedData, key: string): Promise<string> => {
  const encryptionKey = forge.util.createBuffer(forge.util.hexToBytes(key));

  const decipher = forge.cipher.createDecipher('AES-GCM', encryptionKey);
  decipher.start({
    iv: base64.decode(data.iv),
    tagLength: data.tagLength,
    tag: retrieveBufferFromBase64(data.tag),
  });
  decipher.update(retrieveBufferFromBase64(data.data));
  const pass = decipher.finish();

  if (pass) {
    const decryptedData = decipher.output.getBytes();
    return Promise.resolve(decryptedData);
  }

  return Promise.reject(new Error(`Fail to decrypt data`));
};

export default decrypt;
