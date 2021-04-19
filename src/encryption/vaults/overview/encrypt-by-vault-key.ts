import { EncryptedData } from '../../common/aes/definitions';
import aes from '../../common/aes';

export default function encryptByVaultKey(
  overview: Record<string, any>,
  vaultKey: string,
): Promise<EncryptedData> {
  return aes.encrypt(JSON.stringify(overview), vaultKey);
}
