import { EncryptedData } from '../../common/aes/encrypt';
import decrypt from '../../common/aes/decrypt';

export const decryptVaultMetadata = async (
  metadata: EncryptedData,
  vaultKey: string,
): Promise<Record<string, any>> => {
  return JSON.parse(await decrypt(metadata, vaultKey));
};

export default decryptVaultMetadata;
