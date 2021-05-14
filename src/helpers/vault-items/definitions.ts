export {
  EncryptedVaultItem,
  DecryptedVaultItem,
} from '../../encryption/vaults/items/definitions';

export class VaultItemOverview {
  name: string;
  desc?: string;
  fields?: VaultItemField[];
}

export class VaultItemField {
  id: string;
  position: number;
  fieldName: string;
  name: string;
  value: string;
}

export class VaultItemDetails {
  fields: VaultItemField[];
}
