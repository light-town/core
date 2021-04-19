export {
  EncryptedVaultItem,
  DecryptedVaultItem,
} from '../../encryption/vaults/items/definitions';

export class VaultItemOverview {
  name: string;
  desc?: string;
  [key: string]: any;
}

export class VaultItemField {
  fieldName: string;
  value: string;
  [key: string]: any;
}

export class VaultItemDetails {
  fields: VaultItemField[];
  [key: string]: any;
}
