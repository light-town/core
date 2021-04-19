export { EncryptedVaultItemCategory, DecryptedVaultItemCategory, } from '../../encryption/vaults/categories/definitions';
export declare class VaultCategoryOverview {
    name: string;
    desc?: string;
    default?: boolean;
    [key: string]: any;
}
export declare class AbstractField {
    name: string;
    view: {
        element: string;
        [key: string]: any;
    };
    editor: {
        element: string;
        [key: string]: any;
    };
    position?: number;
    frequency?: number;
    required?: boolean;
    [key: string]: any;
}
export declare class VaultCategoryDetails {
    schema: {
        fields: AbstractField[];
        [key: string]: any;
    };
    [key: string]: any;
}
