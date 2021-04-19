export {
  EncryptedVaultItem,
  DecryptedVaultItem,
} from '../../encryption/vaults/items/definitions';

export class VaultItemOverview {
  name: string;
  desc?: string;
}

export class VaultItemField {
  fieldName: string;
  value: string;
}

export class VaultItemDetails {
  fields: VaultItemField[];
}
