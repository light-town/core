/// <reference types="node-forge" />
import common from './common';
import srp from './srp';
import forge from './forge';
export { common, srp, forge };
declare const _default: {
    common: {
        generateAccountKey: ({ versionCode, userId }: import("./common/generateAccountKey").Options) => string;
        generateCryptoRandomString: (length: number) => string;
        generateSalt: () => string;
    };
    srp: {
        client: {
            deriveVerifier: (secretKey: string, password: string) => import("./srp/client/deriveVerifier").Verifier;
            deriveSession: (salt: string, secretKey: string, password: string, clientSecretEphemeral: string, serverPublicEphemeral: string) => import("secure-remote-password/client").Session;
            verifySession: (clientPublicEphemeral: string, clientSession: import("secure-remote-password/client").Session, serverSessionProof: string) => void;
            generateEphemeral: () => import("secure-remote-password/client").Ephemeral;
        };
        server: {
            deriveSession: (serverSecretEphemeral: string, clientPublicEphemeral: string, salt: string, secretKey: string, verifier: string, clientSessionProof: string) => import("secure-remote-password/server").Session;
            generateEphemeral: (verifier: string) => import("secure-remote-password/server").Ephemeral;
        };
    };
    forge: {
        certificates: {
            generateKeyPair: () => {
                publicKey: import("node-forge").pki.ed25519.NativeBuffer;
                privateKey: import("node-forge").pki.ed25519.NativeBuffer;
            };
            signCertificate: (privateKey: import("node-forge").pki.ed25519.BinaryBuffer, message: string, options?: import("./forge/certificates/signCertificate").Options) => import("node-forge").pki.ed25519.NativeBuffer;
            verifyCertificate: (publicKey: import("node-forge").pki.ed25519.NativeBuffer, signature: import("node-forge").pki.ed25519.BinaryBuffer, message: string, options?: import("./forge/certificates/verifyCertificate").Options) => boolean;
        };
    };
};
export default _default;
