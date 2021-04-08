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
        base64: {
            encode: (bytes: string) => string;
            decode: (bytes: string) => string;
        };
        generateAccountKey: (options: import("./common/generateAccountKey").Options) => string;
        generateCryptoRandomString: (length: number) => string;
        generateRandomSalt: (length: number) => string;
        normalizeMasterPassword: (password: string) => string;
        deriveMasterUnlockKey: (accountKey: string, normalizedMasterPassword: string, salt?: string) => {
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
        privateKey: {
            encryptBySymmetricKey: (privateKey: import("node-forge").pki.PrivateKey, symmetricKey: string) => Promise<import("./vaults/privateKey/encryptBySymmetricKey").EncryptedPrivateKey>;
            decryptBySymmetricKey: (encryptedPrivateKey: import("./vaults/privateKey/encryptBySymmetricKey").EncryptedPrivateKey, symmetricKey: string) => Promise<import("node-forge").pki.rsa.PrivateKey>;
        };
        symmetricKey: {
            encryptBySecretKey: (symmetricKey: string, secretKey: string, salt: string) => Promise<import("./vaults/symmetricKey/encryptBySecretKey").EncryptedSymmetricKey>;
            decryptBySecretKey: (encryptedSymmetricKey: import("./vaults/symmetricKey/encryptBySecretKey").EncryptedSymmetricKey, secretKey: string) => Promise<string>;
            encryptByPublicKey: (symmetricKey: string, publicKey: import("node-forge").pki.rsa.PublicKey) => Promise<import("./vaults/symmetricKey/encryptByPublicKey").EncryptedSymmetricKey>;
            decryptByPrivateKey: (encryptedSymmetricKey: import("./vaults/symmetricKey/encryptByPublicKey").EncryptedSymmetricKey, privateKey: import("node-forge").pki.rsa.PrivateKey) => Promise<string>;
        };
        vaultKey: {
            encryptBySecretKey: (vaultKey: string, secretKey: string) => Promise<import("./vaults/vaultKey/encryptBySecretKey").EncryptedVaultKey>;
            decryptBySecretKey: (encryptedVaultKey: import("./vaults/vaultKey/encryptBySecretKey").EncryptedVaultKey, secretKey: string) => Promise<string>;
            encryptByPublicKey: (vaultKey: string, publicKey: import("node-forge").pki.rsa.PublicKey) => Promise<import("./vaults/vaultKey/encryptByPublicKey").EncryptedVaultKey>;
            decryptByPrivateKey: (encryptedVaultKey: import("./vaults/vaultKey/encryptByPublicKey").EncryptedVaultKey, privateKey: import("node-forge").pki.rsa.PrivateKey) => Promise<string>;
        };
        vaultMetadata: {
            encryptByVaultKey: (metadata: Record<string, any>, vaultKey: string) => Promise<import("./common/aes/encrypt").EncryptedData>;
            decryptByVaultKey: (metadata: import("./common/aes/encrypt").EncryptedData, vaultKey: string) => Promise<Record<string, any>>;
        };
        teamKey: {
            encryptBySecretKey: (teamKey: string, secretKey: string) => Promise<import("./vaults/teamKey/encryptBySecretKey").EncryptedTeamKey>;
            decryptBySecretKey: (encryptedTeamKey: import("./vaults/teamKey/encryptBySecretKey").EncryptedTeamKey, secretKey: string) => Promise<string>;
            encryptByPublicKey: (teamKey: string, publicKey: import("node-forge").pki.rsa.PublicKey) => Promise<import("./vaults/teamKey/encryptByPublicKey").EncryptedTeamKey>;
            decryptByPrivateKey: (encryptedTeamKey: import("./vaults/teamKey/encryptByPublicKey").EncryptedTeamKey, privateKey: import("node-forge").pki.rsa.PrivateKey) => Promise<string>;
        };
        teamMetadata: {
            encryptByTeamKey: (metadata: Record<string, any>, teamKey: string) => Promise<import("./common/aes/encrypt").EncryptedData>;
            decryptByTeamKey: (metadata: import("./common/aes/encrypt").EncryptedData, teamKey: string) => Promise<Record<string, any>>;
        };
        decryptVaultItem: (options: import("./vaults/decryptVaultItem").Options) => Promise<any>;
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
        generateKeyPair: () => Promise<import("node-forge").pki.rsa.KeyPair>;
        publicKeyToString: (publicKey: import("node-forge").pki.rsa.PublicKey) => string;
        publicKeyFromString: (pem: string) => import("node-forge").pki.rsa.PublicKey;
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
