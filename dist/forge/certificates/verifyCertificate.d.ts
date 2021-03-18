import * as forge from 'node-forge';
export interface Options {
    encoding: 'utf8' | 'binary';
}
export declare const verifyCertificate: (publicKey: forge.pki.ed25519.Key, signature: forge.pki.ed25519.BinaryBuffer, message: string, options?: Options) => boolean;
export default verifyCertificate;
