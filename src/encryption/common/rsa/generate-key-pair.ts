import * as forge from 'node-forge';

export default async function generateKeyPair(): Promise<forge.pki.rsa.KeyPair> {
  return new Promise((res, rej) => {
    forge.pki.rsa.generateKeyPair(
      {
        bits: 2048,
        workers: -1,
        workerScript: '/forge/prime.worker.min.js',
      },
      function (err, keyPair) {
        if (err) {
          rej(err);
          return;
        }

        res(keyPair);
      },
    );
  });
}
