/// <reference types="node-forge" />
import { generateKeyPair } from './generateKeyPair';
import { signCertificate } from './signCertificate';
import { verifyCertificate } from './verifyCertificate';
export { generateKeyPair, signCertificate, verifyCertificate };
declare const _default: {
    generateKeyPair: () => {
        publicKey: import("node-forge").pki.ed25519.NativeBuffer;
        privateKey: import("node-forge").pki.ed25519.NativeBuffer;
    };
    signCertificate: (privateKey: import("node-forge").pki.ed25519.BinaryBuffer, message: string, options?: import("./signCertificate").Options) => import("node-forge").pki.ed25519.NativeBuffer;
    verifyCertificate: (publicKey: import("node-forge").pki.ed25519.NativeBuffer, signature: import("node-forge").pki.ed25519.BinaryBuffer, message: string, options?: import("./verifyCertificate").Options) => boolean;
};
export default _default;
