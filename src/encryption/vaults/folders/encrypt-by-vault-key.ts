import aes from '../../common/aes';
import utf8 from '../../common/utf-8';
import { EncryptedVaultFolder } from './definitions';

export default async function encryptVaultFolder(
  overview: Record<string, any>,
  vaultKey: string,
): Promise<EncryptedVaultFolder> {
  return {
    encOverview: await aes.encrypt(
      utf8.encode(JSON.stringify(overview)),
      vaultKey,
    ),
  };
}
