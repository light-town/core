import encryption from '../../encryption';
import { VaultOverview, EncryptedVault, DecryptedVault } from './definitions';
import { EncryptedVaultKeyBySecretKey } from '../../encryption/vaults/key/definitions';

export default async function decryptVaultBySecretKeyHelper(
  encVault: EncryptedVault,
  secretKey: string,
): Promise<DecryptedVault> {
  const key = await encryption.vaults.key.decryptBySecretKey(
    <EncryptedVaultKeyBySecretKey>encVault.encKey,
    secretKey,
  );
  const overview = await encryption.vaults.overview.decryptByVaultKey(
    encVault.encOverview,
    key,
  );
  return {
    key,
    overview: <VaultOverview>overview,
  };
}
