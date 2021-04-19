/// <reference types="node-forge" />
import { generateKeyPair } from './generate-key-pair';
import { signCertificate } from './sign-certificate';
import { verifyCertificate } from './verify-certificate';
export { generateKeyPair, signCertificate, verifyCertificate };
declare const _default: {
    generateKeyPair: () => {
        publicKey: import("node-forge").pki.ed25519.NativeBuffer;
        privateKey: import("node-forge").pki.ed25519.NativeBuffer;
    };
    signCertificate: (privateKey: import("node-forge").pki.ed25519.BinaryBuffer, message: string, options?: import("./sign-certificate").Options) => import("node-forge").pki.ed25519.NativeBuffer;
    verifyCertificate: (publicKey: import("node-forge").pki.ed25519.NativeBuffer, signature: import("node-forge").pki.ed25519.BinaryBuffer, message: string, options?: import("./verify-certificate").Options) => boolean;
};
export default _default;
