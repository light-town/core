import common from './common';
import keySets from './key-sets';
import teams from './teams';
import vaults from './vaults';
export { common, keySets, teams, vaults };
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
            encode: typeof import("./common/base64/encode").default;
            decode: typeof import("./common/base64/decode").default;
        };
        rsa: {
            definitions: typeof import("./common/rsa/definitions");
            encrypt: typeof import("./common/rsa/encrypt").default;
            decrypt: typeof import("./common/rsa/decrypt").default;
            generateKeyPair: typeof import("./common/rsa/generate-key-pair").default;
            publicKeyFromString: typeof import("./common/rsa/public-key-from-string").default;
            publicKeyToString: typeof import("./common/rsa/public-key-to-string").default;
        };
        generateAccountKey: typeof import("./common").generateAccountKey;
        generateCryptoRandomString: (length: number) => string;
        generateRandomSalt: (length: number) => string;
        normalizeMasterPassword: (password: string) => string;
        deriveMasterUnlockKey: typeof import("./common").deriveMasterUnlockKey;
        MasterUnlockKey: typeof import("./common").MasterUnlockKey;
    };
    keySets: {
        privateKey: {
            definitions: typeof import("./key-sets/private-key/definitions");
            encryptBySymmetricKey: typeof import("./key-sets/private-key/encrypt-by-symmetric-key").default;
            decryptBySymmetricKey: typeof import("./key-sets/private-key/decrypt-by-symmetric-key").default;
        };
        symmetricKey: {
            definitions: typeof import("./key-sets/symmetric-key/definitions");
            encryptByPublicKey: typeof import("./key-sets/symmetric-key/encrypt-by-public-key").default;
            decryptByPrivateKey: typeof import("./key-sets/symmetric-key/decrypt-by-private-key").default;
            encryptBySecretKey: typeof import("./key-sets/symmetric-key/encrypt-by-secret-key").default;
            decryptBySecretKey: typeof import("./key-sets/symmetric-key/decrypt-by-secret-key").default;
        };
    };
    teams: {
        key: {
            definitions: typeof import("./teams/key/definitions");
            encryptBySecretKey: typeof import("./teams/key/encrypt-by-secret-key").default;
            decryptBySecretKey: typeof import("./teams/key/decrypt-by-secret-key").default;
            encryptByPublicKey: typeof import("./teams/key/encrypt-by-public-key").default;
            decryptByPrivateKey: typeof import("./teams/key/decrypt-by-private-key").default;
        };
        overview: {
            encryptByTeamKey: (overview: Record<string, any>, teamKey: string) => Promise<import("./common/aes/definitions").EncryptedData>;
            decryptByTeamKey: typeof import("./teams/overview/decrypt-by-team-key").default;
        };
    };
    vaults: {
        items: {
            definitions: typeof import("./vaults/items/definitions");
            encryptVaultItem: typeof import("./vaults/items/encrypt-by-vault-key").default;
            encryptOverviewByVaultKey: typeof import("./vaults/items/encrypt-by-vault-key").encryptOverviewByVaultKey;
            encryptDetailsByVaultKey: typeof import("./vaults/items/encrypt-by-vault-key").encryptDetailsByVaultKey;
            decryptVaultItem: typeof import("./vaults/items/decrypt-by-vault-key").default;
            decryptOverviewByVaultKey: typeof import("./vaults/items/decrypt-by-vault-key").decryptOverviewByVaultKey;
            decryptDetailsByVaultKey: typeof import("./vaults/items/decrypt-by-vault-key").decryptDetailsByVaultKey;
        };
        key: {
            definitions: typeof import("./vaults/key/definitions");
            encryptBySecretKey: (vaultKey: string, secretKey: string) => Promise<import("./vaults/key/definitions").EncryptedVaultKeyBySecretKey>;
            decryptBySecretKey: typeof import("./vaults/key/decrypt-by-secret-key").default;
            encryptByPublicKey: typeof import("./vaults/key/encrypt-by-public-key").default;
            decryptByPrivateKey: typeof import("./vaults/key/decrypt-by-private-key").default;
        };
        overview: {
            encryptByVaultKey: typeof import("./vaults/overview/encrypt-by-vault-key").default;
            decryptByVaultKey: typeof import("./vaults/overview/decrypt-by-vault-key").default;
        };
        folders: {
            definitions: typeof import("./vaults/folders/definitions");
            encryptVaultFolder: typeof import("./vaults/folders/encrypt-by-vault-key").default;
            decryptVaultFolder: typeof import("./vaults/folders/decrypt-by-vault-key").default;
        };
        categories: {
            definitions: typeof import("./vaults/categories/definitions");
            encryptVaultItemCategory: typeof import("./vaults/categories/encrypt-by-vault-key").default;
            decryptVaultItemCategory: typeof import("./vaults/categories/decrypt-by-vault-key").default;
        };
    };
};
export default _default;
