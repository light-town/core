import common from './common';
import keySets from './keySets';
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
            generateKeyPair: typeof import("./common/rsa/generateKeyPair").default;
            publicKeyFromString: typeof import("./common/rsa/publicKeyFromString").default;
            publicKeyToString: typeof import("./common/rsa/publicKeyToString").default;
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
            definitions: typeof import("./keySets/privateKey/definitions");
            encryptBySymmetricKey: typeof import("./keySets/privateKey/encryptBySymmetricKey").default;
            decryptBySymmetricKey: typeof import("./keySets/privateKey/decryptBySymmetricKey").default;
        };
        symmetricKey: {
            definitions: typeof import("./keySets/symmetricKey/definitions");
            encryptByPublicKey: typeof import("./keySets/symmetricKey/encryptByPublicKey").default;
            decryptByPrivateKey: typeof import("./keySets/symmetricKey/decryptByPrivateKey").default;
            encryptBySecretKey: typeof import("./keySets/symmetricKey/encryptBySecretKey").default;
            decryptBySecretKey: typeof import("./keySets/symmetricKey/decryptBySecretKey").default;
        };
    };
    teams: {
        key: {
            definitions: typeof import("./teams/key/definitions");
            encryptBySecretKey: typeof import("./teams/key/encryptBySecretKey").default;
            decryptBySecretKey: typeof import("./teams/key/decryptBySecretKey").default;
            encryptByPublicKey: typeof import("./teams/key/encryptByPublicKey").default;
            decryptByPrivateKey: typeof import("./teams/key/decryptByPrivateKey").default;
        };
        overview: {
            encryptByTeamKey: (overview: Record<string, any>, teamKey: string) => Promise<import("./common/aes/definitions").EncryptedData>;
            decryptByTeamKey: typeof import("./teams/overview/decryptByTeamKey").default;
        };
    };
    vaults: {
        items: {
            definitions: typeof import("./vaults/items/definitions");
            encryptVaultItem: typeof import("./vaults/items/encryptByVaultKey").default;
            encryptOverviewByVaultKey: typeof import("./vaults/items/encryptByVaultKey").encryptOverviewByVaultKey;
            encryptDetailsByVaultKey: typeof import("./vaults/items/encryptByVaultKey").encryptDetailsByVaultKey;
            decryptVaultItem: typeof import("./vaults/items/decryptByVaultKey").default;
            decryptOverviewByVaultKey: typeof import("./vaults/items/decryptByVaultKey").decryptOverviewByVaultKey;
            decryptDetailsByVaultKey: typeof import("./vaults/items/decryptByVaultKey").decryptDetailsByVaultKey;
        };
        key: {
            definitions: typeof import("./vaults/key/definitions");
            encryptBySecretKey: (vaultKey: string, secretKey: string) => Promise<import("./vaults/key/definitions").EncryptedVaultKeyBySecretKey>;
            decryptBySecretKey: typeof import("./vaults/key/decryptBySecretKey").default;
            encryptByPublicKey: typeof import("./vaults/key/encryptByPublicKey").default;
            decryptByPrivateKey: typeof import("./vaults/key/decryptByPrivateKey").default;
        };
        overview: {
            encryptByVaultKey: typeof import("./vaults/overview/encryptByVaultKey").default;
            decryptByVaultKey: typeof import("./vaults/overview/decryptByVaultKey").default;
        };
        folders: {
            definitions: typeof import("./vaults/folders/definitions");
            encryptVaultFolder: typeof import("./vaults/folders/encryptByVaultKey").default;
            decryptVaultFolder: typeof import("./vaults/folders/decryptByVaultKey").default;
        };
        categories: {
            definitions: typeof import("./vaults/categories/definitions");
            encryptVaultItemCategory: typeof import("./vaults/categories/encryptByVaultKey").default;
            decryptVaultItemCategory: typeof import("./vaults/categories/decryptByVaultKey").default;
        };
    };
};
export default _default;
