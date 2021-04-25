import srp from './srp';
import encryption from './encryption';
import helpers from './helpers';
export { encryption, srp, helpers };
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
            utf8: {
                encode: typeof import("./encryption/common/utf-8/encode").default;
                decode: typeof import("./encryption/common/utf-8/decode").default;
            };
            rsa: {
                definitions: typeof import("./encryption/common/rsa/definitions");
                encrypt: typeof import("./encryption/common/rsa/encrypt").default;
                decrypt: typeof import("./encryption/common/rsa/decrypt").default;
                generateKeyPair: typeof import("./encryption/common/rsa/generate-key-pair").default;
                publicKeyFromString: typeof import("./encryption/common/rsa/public-key-from-string").default;
                publicKeyToString: typeof import("./encryption/common/rsa/public-key-to-string").default;
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
                definitions: typeof import("./encryption/key-sets/private-key/definitions");
                encryptBySymmetricKey: typeof import("./encryption/key-sets/private-key/encrypt-by-symmetric-key").default;
                decryptBySymmetricKey: typeof import("./encryption/key-sets/private-key/decrypt-by-symmetric-key").default;
            };
            symmetricKey: {
                definitions: typeof import("./encryption/key-sets/symmetric-key/definitions");
                encryptByPublicKey: typeof import("./encryption/key-sets/symmetric-key/encrypt-by-public-key").default;
                decryptByPrivateKey: typeof import("./encryption/key-sets/symmetric-key/decrypt-by-private-key").default;
                encryptBySecretKey: typeof import("./encryption/key-sets/symmetric-key/encrypt-by-secret-key").default;
                decryptBySecretKey: typeof import("./encryption/key-sets/symmetric-key/decrypt-by-secret-key").default;
            };
        };
        teams: {
            key: {
                definitions: typeof import("./encryption/teams/key/definitions");
                encryptBySecretKey: typeof import("./encryption/teams/key/encrypt-by-secret-key").default;
                decryptBySecretKey: typeof import("./encryption/teams/key/decrypt-by-secret-key").default;
                encryptByPublicKey: typeof import("./encryption/teams/key/encrypt-by-public-key").default;
                decryptByPrivateKey: typeof import("./encryption/teams/key/decrypt-by-private-key").default;
            };
            overview: {
                encryptByTeamKey: (overview: Record<string, any>, teamKey: string) => Promise<import("./encryption/common/aes/definitions").EncryptedData>;
                decryptByTeamKey: typeof import("./encryption/teams/overview/decrypt-by-team-key").default;
            };
        };
        vaults: {
            items: {
                definitions: typeof import("./encryption/vaults/items/definitions");
                encryptVaultItem: typeof import("./encryption/vaults/items/encrypt-by-vault-key").default;
                encryptOverviewByVaultKey: typeof import("./encryption/vaults/items/encrypt-by-vault-key").encryptOverviewByVaultKey;
                encryptDetailsByVaultKey: typeof import("./encryption/vaults/items/encrypt-by-vault-key").encryptDetailsByVaultKey;
                decryptVaultItem: typeof import("./encryption/vaults/items/decrypt-by-vault-key").default;
                decryptOverviewByVaultKey: typeof import("./encryption/vaults/items/decrypt-by-vault-key").decryptOverviewByVaultKey;
                decryptDetailsByVaultKey: typeof import("./encryption/vaults/items/decrypt-by-vault-key").decryptDetailsByVaultKey;
            };
            key: {
                definitions: typeof import("./encryption/vaults/key/definitions");
                encryptBySecretKey: (vaultKey: string, secretKey: string) => Promise<import("./encryption/vaults/key/definitions").EncryptedVaultKeyBySecretKey>;
                decryptBySecretKey: typeof import("./encryption/vaults/key/decrypt-by-secret-key").default;
                encryptByPublicKey: typeof import("./encryption/vaults/key/encrypt-by-public-key").default;
                decryptByPrivateKey: typeof import("./encryption/vaults/key/decrypt-by-private-key").default;
            };
            overview: {
                encryptByVaultKey: typeof import("./encryption/vaults/overview/encrypt-by-vault-key").default;
                decryptByVaultKey: typeof import("./encryption/vaults/overview/decrypt-by-vault-key").default;
            };
            folders: {
                definitions: typeof import("./encryption/vaults/folders/definitions");
                encryptVaultFolder: typeof import("./encryption/vaults/folders/encrypt-by-vault-key").default;
                decryptVaultFolder: typeof import("./encryption/vaults/folders/decrypt-by-vault-key").default;
            };
            categories: {
                definitions: typeof import("./encryption/vaults/categories/definitions");
                encryptVaultItemCategory: typeof import("./encryption/vaults/categories/encrypt-by-vault-key").default;
                decryptVaultItemCategory: typeof import("./encryption/vaults/categories/decrypt-by-vault-key").default;
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
    helpers: {
        keySets: {
            definitions: typeof import("./helpers/key-sets/definitions");
            createKeySetHelper: typeof import("./helpers/key-sets/create-key-set.helper").default;
            createPrimaryKeySetHelper: typeof import("./helpers/key-sets/create-primary-key-set.helper").default;
            decryptKeySetHelper: typeof import("./helpers/key-sets/decrypt-key-set.helper").default;
            decryptPrimaryKeySetHelper: typeof import("./helpers/key-sets/decrypt-primary-key-set.helper").default;
        };
        masterUnlockKey: {
            deriveMasterUnlockKeyHelper: typeof import("./helpers/master-unlock-key").deriveMasterUnlockKeyHelper;
        };
        vaultFolders: {
            definitions: typeof import("./helpers/vault-folders/definitions");
            createVaultFolderHelper: typeof import("./helpers/vault-folders/create-vault-folder.helper").default;
            decryptVaultFoldersHelper: typeof import("./helpers/vault-folders/decrypt-vault-folder.helper").default;
            decryptVaultFolderHelper: typeof import("./helpers/vault-folders/decrypt-vault-folders.helper").default;
        };
        vaultItemCategories: {
            definitions: typeof import("./helpers/vault-item-categories/definitions");
            createVaultItemCategoryHelper: typeof import("./helpers/vault-item-categories/create-vault-item-category.helper").default;
            decryptVaultItemCategoriesHelper: typeof import("./helpers/vault-item-categories/decrypt-vault-item-categories.helper").default;
            decryptVaultItemCategoryHelper: typeof import("./helpers/vault-item-categories/decrypt-vault-item-category.helper").default;
            createDefaultVaultItemCategories: typeof import("./helpers/vault-item-categories/create-default-vault-item-categories.helper").default;
        };
        vaultItems: {
            definitions: typeof import("./helpers/vault-items/definitions");
            decryptVaultItemHelper: typeof import("./helpers/vault-items/decrypt-vault-item.helper").default;
            decryptVaultItemsHelper: typeof import("./helpers/vault-items/decrypt-vault-items.helper").default;
            createVaultItemHelper: typeof import("./helpers/vault-items/create-vault-item.helper").default;
        };
        vaults: {
            definitions: typeof import("./helpers/vaults/definitions");
            decryptVaultByPrivateKeyHelper: typeof import("./helpers/vaults/decrypt-vault-by-private-key.helper").default;
            decryptVaultBySecretKeyHelper: typeof import("./helpers/vaults/decrypt-vault-by-secret-key.helper").default;
            createVaultHelper: typeof import("./helpers/vaults/create-vault.helper").default;
            shareVaultHelper: typeof import("./helpers/vaults/share-vault.helper").default;
        };
    };
};
export default _default;
