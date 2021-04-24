export { EncryptedVaultItem, DecryptedVaultItem, } from '../../encryption/vaults/items/definitions';
export declare class VaultItemOverview {
    name: string;
    desc?: string;
    [key: string]: any;
}
export declare class VaultItemField {
    position: number;
    fieldName: string;
    name: string;
    value: string;
    [key: string]: any;
}
export declare class VaultItemDetails {
    fields: VaultItemField[];
    [key: string]: any;
}
