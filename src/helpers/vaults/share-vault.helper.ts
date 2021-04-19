import { DecryptedVault, EncryptedVault } from './definitions';
import encryption from '../../encryption/';

export default async function shareVaultHelper(
  vault: DecryptedVault,
  secretKey: string,
): Promise<EncryptedVault> {
  const encKey = await encryption.vaults.key.encryptBySecretKey(
    vault.key,
    secretKey,
  );
  const encOverview = await encryption.vaults.overview.encryptByVaultKey(
    vault.overview,
    vault.key,
  );
  return {
    encKey,
    encOverview,
  };
  return;
}
