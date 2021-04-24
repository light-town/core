export {
  EncryptedVaultItemCategory,
  DecryptedVaultItemCategory,
} from '../../encryption/vaults/categories/definitions';

export class VaultCategoryOverview {
  name: string;
  desc?: string;
  default?: boolean = false;
  [key: string]: any;
}

export class AbstractField {
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
  count?: {
    min: number;
    max: number;
  };
  required?: boolean;
  pinned?: boolean;
  [key: string]: any;
}

export class VaultCategoryDetails {
  schema: {
    fields: { [key: string]: AbstractField };
    [key: string]: any;
  };
  [key: string]: any;
}
