export { EncryptedVaultItem, DecryptedVaultItem, } from '../../encryption/vaults/items/definitions';
export declare class VaultItemOverview {
    name: string;
    desc?: string;
    fields?: VaultItemField[];
}
export declare class VaultItemField {
    id: string;
    position: number;
    fieldName: string;
    name: string;
    value: string;
}
export declare class VaultItemDetails {
    fields: VaultItemField[];
}
