export { EncryptedVaultItemCategory, DecryptedVaultItemCategory, } from '../../encryption/vaults/categories/definitions';
export declare class VaultCategoryOverview {
    name: string;
    desc?: string;
    default?: boolean;
}
export declare class AbstractField {
    name: string;
    view: {
        element: string;
    };
    editor: {
        element: string;
    };
    position?: number;
    frequency?: number;
    required?: boolean;
}
export declare class VaultCategoryDetails {
    schema: {
        fields: AbstractField[];
    };
}
