import items from './items';
import key from './key';
import overview from './overview';
import folders from './folders';
import categories from './categories';
export { items, key, overview, folders, categories };
declare const _default: {
    items: {
        definitions: typeof import("./items/definitions");
        encryptVaultItem: typeof import("./items/encrypt-by-vault-key").default;
        encryptOverviewByVaultKey: typeof import("./items/encrypt-by-vault-key").encryptOverviewByVaultKey;
        encryptDetailsByVaultKey: typeof import("./items/encrypt-by-vault-key").encryptDetailsByVaultKey;
        decryptVaultItem: typeof import("./items/decrypt-by-vault-key").default;
        decryptOverviewByVaultKey: typeof import("./items/decrypt-by-vault-key").decryptOverviewByVaultKey;
        decryptDetailsByVaultKey: typeof import("./items/decrypt-by-vault-key").decryptDetailsByVaultKey;
    };
    key: {
        definitions: typeof import("./key/definitions");
        encryptBySecretKey: (vaultKey: string, secretKey: string) => Promise<import("./key/definitions").EncryptedVaultKeyBySecretKey>;
        decryptBySecretKey: typeof import("./key/decrypt-by-secret-key").default;
        encryptByPublicKey: typeof import("./key/encrypt-by-public-key").default;
        decryptByPrivateKey: typeof import("./key/decrypt-by-private-key").default;
    };
    overview: {
        encryptByVaultKey: typeof import("./overview/encrypt-by-vault-key").default;
        decryptByVaultKey: typeof import("./overview/decrypt-by-vault-key").default;
    };
    folders: {
        definitions: typeof import("./folders/definitions");
        encryptVaultFolder: typeof import("./folders/encrypt-by-vault-key").default;
        decryptVaultFolder: typeof import("./folders/decrypt-by-vault-key").default;
    };
    categories: {
        definitions: typeof import("./categories/definitions");
        encryptVaultItemCategory: typeof import("./categories/encrypt-by-vault-key").default;
        decryptVaultItemCategory: typeof import("./categories/decrypt-by-vault-key").default;
    };
};
export default _default;
