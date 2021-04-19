export { EncryptedVaultItem, DecryptedVaultItem, } from '../../encryption/vaults/items/definitions';
export declare class VaultItemOverview {
    name: string;
    desc?: string;
}
export declare class VaultItemField {
    fieldName: string;
    value: string;
}
export declare class VaultItemDetails {
    fields: VaultItemField[];
}
