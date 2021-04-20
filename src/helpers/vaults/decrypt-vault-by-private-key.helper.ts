import { PrivateKey } from '../../encryption/common/rsa/definitions';
import encryption from '../../encryption';
import { VaultOverview, EncryptedVault, DecryptedVault } from './definitions';

export default async function decryptVaultByPrivateKeyHelper(
  encVault: EncryptedVault,
  privateKey: PrivateKey,
): Promise<DecryptedVault> {
  const key = await encryption.vaults.key.decryptByPrivateKey(
    encVault.encKey,
    privateKey,
  );
  const overview = await encryption.vaults.overview.decryptByVaultKey(
    encVault.encOverview,
    key,
  );
  const result = {
    key,
    overview: <VaultOverview>overview,
    ...encVault,
  };

  delete result.encKey;
  delete result.encOverview;

  return result;
}
