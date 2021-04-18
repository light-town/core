import items from './items';
import key from './key';
import overview from './overview';
import folders from './folders';
import categories from './categories';
export { items, key, overview, folders, categories };
declare const _default: {
    items: {
        definitions: typeof import("./items/definitions");
        encryptVaultItem: typeof import("./items/encryptByVaultKey").default;
        encryptOverviewByVaultKey: typeof import("./items/encryptByVaultKey").encryptOverviewByVaultKey;
        encryptDetailsByVaultKey: typeof import("./items/encryptByVaultKey").encryptDetailsByVaultKey;
        decryptVaultItem: typeof import("./items/decryptByVaultKey").default;
        decryptOverviewByVaultKey: typeof import("./items/decryptByVaultKey").decryptOverviewByVaultKey;
        decryptDetailsByVaultKey: typeof import("./items/decryptByVaultKey").decryptDetailsByVaultKey;
    };
    key: {
        definitions: typeof import("./key/definitions");
        encryptBySecretKey: (vaultKey: string, secretKey: string) => Promise<import("./key/definitions").EncryptedVaultKeyBySecretKey>;
        decryptBySecretKey: typeof import("./key/decryptBySecretKey").default;
        encryptByPublicKey: typeof import("./key/encryptByPublicKey").default;
        decryptByPrivateKey: typeof import("./key/decryptByPrivateKey").default;
    };
    overview: {
        encryptByVaultKey: typeof import("./overview/encryptByVaultKey").default;
        decryptByVaultKey: typeof import("./overview/decryptByVaultKey").default;
    };
    folders: {
        definitions: typeof import("./folders/definitions");
        encryptVaultFolder: typeof import("./folders/encryptByVaultKey").default;
        decryptVaultFolder: typeof import("./folders/decryptByVaultKey").default;
    };
    categories: {
        definitions: typeof import("./categories/definitions");
        encryptVaultItemCategory: typeof import("./categories/encryptByVaultKey").default;
        decryptVaultItemCategory: typeof import("./categories/decryptByVaultKey").default;
    };
};
export default _default;
