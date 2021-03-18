import * as forge from 'node-forge';

export const retrieveBufferFromBase64 = (base64Value) =>
  forge.util.createBuffer(forge.util.decode64(base64Value));

export class Options {
  encData: {
    iv: string;
    tagLength: number;
    tag: string;
    data: any;
  };
  vaultKey: string;
}

export const decryptVaultItem = (options: Options) => {
  const { encData, vaultKey } = options;

  const key = forge.util.createBuffer(vaultKey);

  const decipher = forge.cipher.createDecipher('AES-GCM', key);
  decipher.start({
    iv: forge.util.hexToBytes(encData.iv),
    tagLength: encData.tagLength,
    tag: retrieveBufferFromBase64(encData.tag),
  });
  decipher.update(retrieveBufferFromBase64(encData.data));
  const pass = decipher.finish();

  if (pass) {
    const decryptedVaultItem = JSON.parse(decipher.output.getBytes());
    return Promise.resolve(decryptedVaultItem);
  }

  return Promise.reject(new Error(`Fail to decrypt vault item`));
};

export const decryptItemOverview = async ({ overview, vaultKey }) => {
  return decryptVaultItem({ encData: overview, vaultKey });
};

export const decryptItemDetails = async ({ details, vaultKey }) => {
  return decryptVaultItem({ encData: details, vaultKey });
};

export default decryptVaultItem;
