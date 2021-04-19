export {
  EncryptedVaultItemCategory,
  DecryptedVaultItemCategory,
} from '../../encryption/vaults/categories/definitions';

export class VaultCategoryOverview {
  name: string;
  desc?: string;
  default?: boolean;
}

export class AbstractField {
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

export class VaultCategoryDetails {
  schema: {
    fields: AbstractField[];
  };
}
