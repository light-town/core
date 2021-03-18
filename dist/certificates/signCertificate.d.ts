import * as forge from 'node-forge';
export interface Options {
    encoding: 'utf8' | 'binary';
}
export declare const signCertificate: (privateKey: forge.pki.ed25519.BinaryBuffer, message: string, options?: Options) => forge.pki.ed25519.NativeBuffer;
export default signCertificate;
