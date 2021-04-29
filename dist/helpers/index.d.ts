declare const _default: {
    keySets: {
        definitions: typeof import("./key-sets/definitions");
        createKeySetHelper: typeof import("./key-sets/create-key-set.helper").default;
        createPrimaryKeySetHelper: typeof import("./key-sets/create-primary-key-set.helper").default;
        decryptKeySetHelper: typeof import("./key-sets/decrypt-key-set.helper").default;
        decryptPrimaryKeySetHelper: typeof import("./key-sets/decrypt-primary-key-set.helper").default;
    };
    masterUnlockKey: {
        deriveMasterUnlockKeyHelper: typeof import("./master-unlock-key").deriveMasterUnlockKeyHelper;
    };
    vaultFolders: {
        definitions: typeof import("./vault-folders/definitions");
        createVaultFolderHelper: typeof import("./vault-folders/create-vault-folder.helper").default;
        decryptVaultFoldersHelper: typeof import("./vault-folders/decrypt-vault-folders.helper").default;
        decryptVaultFolderHelper: typeof import("./vault-folders/decrypt-vault-folder.helper").default;
    };
    vaultItemCategories: {
        definitions: typeof import("./vault-item-categories/definitions");
        createVaultItemCategoryHelper: typeof import("./vault-item-categories/create-vault-item-category.helper").default;
        decryptVaultItemCategoriesHelper: typeof import("./vault-item-categories/decrypt-vault-item-categories.helper").default;
        decryptVaultItemCategoryHelper: typeof import("./vault-item-categories/decrypt-vault-item-category.helper").default;
        createDefaultVaultItemCategories: typeof import("./vault-item-categories/create-default-vault-item-categories.helper").default;
    };
    vaultItems: {
        definitions: typeof import("./vault-items/definitions");
        decryptVaultItemHelper: typeof import("./vault-items/decrypt-vault-item.helper").default;
        decryptVaultItemsHelper: typeof import("./vault-items/decrypt-vault-items.helper").default;
        createVaultItemHelper: typeof import("./vault-items/create-vault-item.helper").default;
    };
    vaults: {
        definitions: typeof import("./vaults/definitions");
        decryptVaultByPrivateKeyHelper: typeof import("./vaults/decrypt-vault-by-private-key.helper").default;
        decryptVaultBySecretKeyHelper: typeof import("./vaults/decrypt-vault-by-secret-key.helper").default;
        createVaultHelper: typeof import("./vaults/create-vault.helper").default;
        shareVaultHelper: typeof import("./vaults/share-vault.helper").default;
    };
};
export default _default;
