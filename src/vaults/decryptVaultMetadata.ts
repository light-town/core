import { EncryptedData } from './encrypt';
import decrypt from './decrypt';

export const decryptVaultMetadata = (
  vaultKey: string,
  metadata: EncryptedData,
) => {
  return decrypt(vaultKey, metadata);
};

export default decryptVaultMetadata;
