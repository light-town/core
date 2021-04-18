import srp from './srp';
import encryption from './encryption';
export { encryption, srp };
declare const _default: {
    encryption: {
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
                encode: typeof import("./encryption/common/base64/encode").default;
                decode: typeof import("./encryption/common/base64/decode").default;
            };
            rsa: {
                definitions: typeof import("./encryption/common/rsa/definitions");
                encrypt: typeof import("./encryption/common/rsa/encrypt").default;
                decrypt: typeof import("./encryption/common/rsa/decrypt").default;
                generateKeyPair: typeof import("./encryption/common/rsa/generateKeyPair").default;
                publicKeyFromString: typeof import("./encryption/common/rsa/publicKeyFromString").default;
                publicKeyToString: typeof import("./encryption/common/rsa/publicKeyToString").default;
            };
            generateAccountKey: typeof import("./encryption/common").generateAccountKey;
            generateCryptoRandomString: (length: number) => string;
            generateRandomSalt: (length: number) => string;
            normalizeMasterPassword: (password: string) => string;
            deriveMasterUnlockKey: typeof import("./encryption/common").deriveMasterUnlockKey;
            MasterUnlockKey: typeof import("./encryption/common").MasterUnlockKey;
        };
        keySets: {
            privateKey: {
                definitions: typeof import("./encryption/keySets/privateKey/definitions");
                encryptBySymmetricKey: typeof import("./encryption/keySets/privateKey/encryptBySymmetricKey").default;
                decryptBySymmetricKey: typeof import("./encryption/keySets/privateKey/decryptBySymmetricKey").default;
            };
            symmetricKey: {
                definitions: typeof import("./encryption/keySets/symmetricKey/definitions");
                encryptByPublicKey: typeof import("./encryption/keySets/symmetricKey/encryptByPublicKey").default;
                decryptByPrivateKey: typeof import("./encryption/keySets/symmetricKey/decryptByPrivateKey").default;
                encryptBySecretKey: typeof import("./encryption/keySets/symmetricKey/encryptBySecretKey").default;
                decryptBySecretKey: typeof import("./encryption/keySets/symmetricKey/decryptBySecretKey").default;
            };
        };
        teams: {
            key: {
                definitions: typeof import("./encryption/teams/key/definitions");
                encryptBySecretKey: typeof import("./encryption/teams/key/encryptBySecretKey").default;
                decryptBySecretKey: typeof import("./encryption/teams/key/decryptBySecretKey").default;
                encryptByPublicKey: typeof import("./encryption/teams/key/encryptByPublicKey").default;
                decryptByPrivateKey: typeof import("./encryption/teams/key/decryptByPrivateKey").default;
            };
            overview: {
                encryptByTeamKey: (overview: Record<string, any>, teamKey: string) => Promise<import("./encryption/common/aes/definitions").EncryptedData>;
                decryptByTeamKey: typeof import("./encryption/teams/overview/decryptByTeamKey").default;
            };
        };
        vaults: {
            items: {
                definitions: typeof import("./encryption/vaults/items/definitions");
                encryptVaultItem: typeof import("./encryption/vaults/items/encryptByVaultKey").default;
                encryptOverviewByVaultKey: typeof import("./encryption/vaults/items/encryptByVaultKey").encryptOverviewByVaultKey;
                encryptDetailsByVaultKey: typeof import("./encryption/vaults/items/encryptByVaultKey").encryptDetailsByVaultKey;
                decryptVaultItem: typeof import("./encryption/vaults/items/decryptByVaultKey").default;
                decryptOverviewByVaultKey: typeof import("./encryption/vaults/items/decryptByVaultKey").decryptOverviewByVaultKey;
                decryptDetailsByVaultKey: typeof import("./encryption/vaults/items/decryptByVaultKey").decryptDetailsByVaultKey;
            };
            key: {
                definitions: typeof import("./encryption/vaults/key/definitions");
                encryptBySecretKey: (vaultKey: string, secretKey: string) => Promise<import("./encryption/vaults/key/definitions").EncryptedVaultKeyBySecretKey>;
                decryptBySecretKey: typeof import("./encryption/vaults/key/decryptBySecretKey").default;
                encryptByPublicKey: typeof import("./encryption/vaults/key/encryptByPublicKey").default;
                decryptByPrivateKey: typeof import("./encryption/vaults/key/decryptByPrivateKey").default;
            };
            overview: {
                encryptByVaultKey: typeof import("./encryption/vaults/overview/encryptByVaultKey").default;
                decryptByVaultKey: typeof import("./encryption/vaults/overview/decryptByVaultKey").default;
            };
            folders: {
                definitions: typeof import("./encryption/vaults/folders/definitions");
                encryptVaultFolder: typeof import("./encryption/vaults/folders/encryptByVaultKey").default;
                decryptVaultFolder: typeof import("./encryption/vaults/folders/decryptByVaultKey").default;
            };
            categories: {
                definitions: typeof import("./encryption/vaults/categories/definitions");
                encryptVaultItemCategory: typeof import("./encryption/vaults/categories/encryptByVaultKey").default;
                decryptVaultItemCategory: typeof import("./encryption/vaults/categories/decryptByVaultKey").default;
            };
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
};
export default _default;
