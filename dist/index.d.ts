/// <reference types="node-forge" />
import common from './common';
import srp from './srp';
import vaults from './vaults';
import certificates from './certificates';
export { common, srp, vaults, certificates };
declare const _default: {
    common: {
        hkdf: {
            computeHKDF: ({ secret, salt }: {
                secret: any;
                salt: any;
            }) => string;
        };
        pbkdf2: {
            computeHash: ({ uint8MasterPassword, encryptionKeySalt, iterations, }: {
                uint8MasterPassword: any;
                encryptionKeySalt: any;
                iterations?: number;
            }) => Uint8Array;
        };
        generateAccountKey: (options: import("./common/generateAccountKey").Options) => string;
        generateCryptoRandomString: (length: number) => string;
        generateRandomSalt: (length: number) => string;
    };
    srp: {
        Client: {
            generateEphemeralKeyPair(): import("./srp/types").Ephemeral;
            deriveVerifier(secretKey: string, password: string): import("./srp/types").Verifier;
            deriveSession(clientSecretEphemeralKey: string, serverPublicEphemeralKey: string, salt: string, secretKey: string, privateKey: string): import("./srp/types").Session;
            verifySession(clientPublicEphemeral: string, clientSession: import("./srp/types").Session, serverSessionProof: string): void;
        };
        Server: {
            generateEphemeralKeyPair(verifier: string): import("./srp/types").Ephemeral;
            deriveSession(serverSecretEphemeralKey: string, clientPublicEphemeralKey: string, salt: string, secretKey: string, verifier: string, clientSessionProofKey: string): import("./srp/types").Session;
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
