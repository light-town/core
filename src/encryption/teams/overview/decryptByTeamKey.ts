import { EncryptedData } from '../../common/aes/definitions';
import aes from '../../common/aes';

export default async function decryptByTeamKey(
  overview: EncryptedData,
  teamKey: string,
): Promise<Record<string, any>> {
  return JSON.parse(await aes.decrypt(overview, teamKey));
}
