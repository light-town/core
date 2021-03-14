import common from './common';
import srp from './srp';
export { common, srp };
declare const _default: {
    common: {
        genAccountKey: ({ versionCode, userId }: import("./common/genAccountKey").Options) => string;
        genCryptoRandomString: (length: number) => string;
        genSalt: () => string;
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
};
export default _default;
