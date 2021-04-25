import { EncryptedData } from '../../common/aes/definitions';
import aes from '../../common/aes';
import utf8 from '../../common/utf-8';

export default async function decryptByVaultKey(
  overview: EncryptedData,
  vaultKey: string,
): Promise<Record<string, any>> {
  return JSON.parse(utf8.decode(await aes.decrypt(overview, vaultKey)));
}
