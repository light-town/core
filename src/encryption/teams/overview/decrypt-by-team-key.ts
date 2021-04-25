import { EncryptedData } from '../../common/aes/definitions';
import aes from '../../common/aes';
import utf8 from '../../common/utf-8';

export default async function decryptByTeamKey(
  overview: EncryptedData,
  teamKey: string,
): Promise<Record<string, any>> {
  return JSON.parse(utf8.decode(await aes.decrypt(overview, teamKey)));
}
