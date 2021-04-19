import createVaultItemCategoryHelper from './create-vault-item-category.helper';
import * as categories from './default-categories';
import * as schemas from './default-schemas';
import { EncryptedVaultItemCategory } from './definitions';

export const defaultSchemas = [
  {
    name: categories.PASSWORD,
    schema: schemas.PASSWORD_SCHEMA,
  },
];

export default async function createDefaultVaultItemCategories(
  vaultKey: string,
): Promise<EncryptedVaultItemCategory[]> {
  return await Promise.all(
    defaultSchemas.map((c) =>
      createVaultItemCategoryHelper(
        {
          name: c.name,
          default: true,
        },
        { schema: c.schema },
        vaultKey,
      ),
    ),
  );
}
