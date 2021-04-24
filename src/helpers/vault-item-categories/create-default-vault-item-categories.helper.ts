import createVaultItemCategoryHelper from './create-vault-item-category.helper';
import schemas from './default-schemas';
import { EncryptedVaultItemCategory } from './definitions';

export const defaultSchemas = Object.values(schemas).map((s) => ({
  name: s.name,
  schema: {
    fields: s.fields,
  },
}));

export default async function createDefaultVaultItemCategories(
  vaultKey: string,
): Promise<EncryptedVaultItemCategory[]> {
  return await Promise.all(
    defaultSchemas.map((s) =>
      createVaultItemCategoryHelper(
        {
          name: s.name,
          default: true,
        },
        { schema: s.schema },
        vaultKey,
      ),
    ),
  );
}
