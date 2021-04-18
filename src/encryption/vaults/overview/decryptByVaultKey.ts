import { EncryptedData } from '../../common/aes/definitions';
import aes from '../../common/aes';

export default async function decryptByVaultKey(
  overview: EncryptedData,
  vaultKey: string,
): Promise<Record<string, any>> {
  return JSON.parse(await aes.decrypt(overview, vaultKey));
}
