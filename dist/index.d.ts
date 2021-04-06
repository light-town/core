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
            computeHash: ({ secretKey, salt, iterations }: {
                secretKey: any;
                salt: any;
                iterations: any;
            }) => Uint8Array;
        };
        generateAccountKey: (options: import("./common/generateAccountKey").Options) => string;
        generateCryptoRandomString: (length: number) => string;
        generateRandomSalt: (length: number) => string;
        normalizeMasterPassword: (password: string) => string;
        deriveMasterUnlockKey: (accountKey: string, normalizedMasterPassword: string, salt: string) => {
            key: string;
            iterations: number;
            salt: string;
        };
    };
    srp: {
        client: {
            derivePrivateKey(secretKey: string, password: string, salt: string): string;
            generateEphemeralKeyPair(): import("./srp/types").Ephemeral;
            deriveVerifier(secretKey: string, password: string): import("./srp/types").Verifier;
            deriveSession(clientSecretEphemeralKey: string, serverPublicEphemeralKey: string, salt: string, secretKey: string, privateKey: string): import("./srp/types").Session;
            verifySession(clientPublicEphemeral: string, clientSession: import("./srp/types").Session, serverSessionProof: string): void;
        };
        server: {
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
            kty: string;
            alg: string;
            key: string;
        };
        encryptSymmetricKey: (options: import("./vaults/encryptSymmetricKey").Options) => import("./vaults/encryptSymmetricKey").EncryptedSymmetricKey;
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
        publicKeyToString: (publicKey: import("node-forge").pki.rsa.PublicKey) => string;
        publicKeyFromString: (pem: string) => import("node-forge").pki.rsa.PublicKey;
        encryptVaultMetadata: (vaultKey: string, metadata: Record<string, any>) => Promise<import("./vaults/encrypt").EncryptedData>;
        decryptVaultMetadata: (vaultKey: string, metadata: import("./vaults/encrypt").EncryptedData) => Promise<Record<string, any>>;
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
