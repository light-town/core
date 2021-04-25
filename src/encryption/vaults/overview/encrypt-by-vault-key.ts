import { EncryptedData } from '../../common/aes/definitions';
import aes from '../../common/aes';
import utf8 from '../../common/utf-8';

export default function encryptByVaultKey(
  overview: Record<string, any>,
  vaultKey: string,
): Promise<EncryptedData> {
  return aes.encrypt(utf8.encode(JSON.stringify(overview)), vaultKey);
}
