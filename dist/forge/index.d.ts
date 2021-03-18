/// <reference types="node-forge" />
import certificates from './certificates';
export { certificates };
declare const _default: {
    certificates: {
        generateKeyPair: () => {
            publicKey: import("node-forge").pki.ed25519.NativeBuffer;
            privateKey: import("node-forge").pki.ed25519.NativeBuffer;
        };
        signCertificate: (privateKey: import("node-forge").pki.ed25519.BinaryBuffer, message: string, options?: import("./certificates/signCertificate").Options) => import("node-forge").pki.ed25519.NativeBuffer;
        verifyCertificate: (publicKey: import("node-forge").pki.ed25519.NativeBuffer, signature: import("node-forge").pki.ed25519.BinaryBuffer, message: string, options?: import("./certificates/verifyCertificate").Options) => boolean;
    };
};
export default _default;
