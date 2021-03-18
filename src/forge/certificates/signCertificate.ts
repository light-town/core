import * as forge from 'node-forge';

export interface Options {
  encoding: 'utf8' | 'binary';
}

export const signCertificate = (
  privateKey: forge.pki.ed25519.BinaryBuffer,
  message: string,
  options: Options = { encoding: 'utf8' },
) => {
  return forge.pki.ed25519.sign({
    message,
    encoding: options.encoding,
    privateKey,
  });
};

export default signCertificate;
