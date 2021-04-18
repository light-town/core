import * as forge from 'node-forge';

export interface Options {
  encoding: 'utf8' | 'binary';
}

export const verifyCertificate = (
  publicKey: forge.pki.ed25519.Key,
  signature: forge.pki.ed25519.BinaryBuffer,
  message: string,
  options: Options = { encoding: 'utf8' },
) => {
  return forge.pki.ed25519.verify({
    message,
    encoding: options.encoding,
    signature,
    publicKey,
  });
};

export default verifyCertificate;
