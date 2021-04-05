import * as forge from 'node-forge';

export const generateKeyPair = async (): Promise<forge.pki.rsa.KeyPair> => {
  return new Promise((res, rej) => {
    forge.pki.rsa.generateKeyPair(
      { bits: 2048, workers: 2 },
      function (err, keyPair) {
        if (err) {
          rej(err);
          return;
        }

        res(keyPair);
      },
    );
  });
};

export default generateKeyPair;
