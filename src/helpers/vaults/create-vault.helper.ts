import { PublicKey } from '../../encryption/common/rsa/definitions';
import encryption from '../../encryption';
import { VaultOverview, EncryptedVault } from './definitions';

export default async function createVaultHelper(
  overview: VaultOverview,
  publicKey: PublicKey,
): Promise<EncryptedVault> {
  const key = encryption.common.generateCryptoRandomString(32);
  const encKey = await encryption.vaults.key.encryptByPublicKey(key, publicKey);
  const encOverview = await encryption.vaults.overview.encryptByVaultKey(
    overview,
    key,
  );
  return {
    encKey,
    encOverview,
  };
}
