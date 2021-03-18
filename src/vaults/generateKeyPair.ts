import * as forge from 'node-forge';

export const generateKeyPair = async (): Promise<forge.pki.rsa.KeyPair> => {
  return await forge.pki.rsa.generateKeyPair({ bits: 2048, workers: 2 });
};

export default generateKeyPair;
