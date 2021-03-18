/// <reference types="node-forge" />
import common from './common';
import srp from './srp';
import vaults from './vaults';
export { common, srp, vaults };
declare const _default: {
    common: {
        generateAccountKey: (options: import("./common/generateAccountKey").Options) => string;
        generateCryptoRandomString: (length: number) => string;
        generateRandomSalt: (length: number) => string;
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
    vaults: {
        decryptPrivateKey: (encryptedPrivateKey: string, symmetricKey: string) => import("node-forge").pki.rsa.PrivateKey;
        decryptSymmetricKey: (options: import("./vaults/decryptSymmetricKey").Options) => Promise<string>;
        decryptVaultItem: (options: import("./vaults/decryptVaultItem").Options) => Promise<any>;
        decryptVaultKey: (encryptedVaultKey: string, privateKey: import("node-forge").pki.rsa.PrivateKey) => string;
        encryptPrivateKey: (privateKey: import("node-forge").pki.PrivateKey, symmetricKey: string) => {
            enc: string;
            key: string;
        };
        encryptSymmetricKey: (options: import("./vaults/encryptSymmetricKey").Options) => {
            enc: string;
            tagLength: number;
            tag: string;
            key: string;
            iv: string;
            iterations: number;
            salt: string;
        };
        encryptVaultItem: ({ details, overview, vaultKey }: {
            details: any;
            overview: any;
            vaultKey: any;
        }) => Promise<{
            encDetails: {
                tag: string;
                data: string;
                tagLength: number;
                iv: string;
            };
            encOverview: {
                tag: string;
                data: string;
                tagLength: number;
                iv: string;
            };
        }>;
        encryptVaultKey: (vaultKey: string, publicKey: import("node-forge").pki.rsa.PublicKey) => import("./vaults/encryptVaultKey").EncryptedVaultKey;
        generateKeyPair: () => Promise<import("node-forge").pki.rsa.KeyPair>;
    };
};
export default _default;
