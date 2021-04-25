import { EncryptedData } from '../../common/aes/definitions';
import aes from '../../common/aes';
import utf8 from '../../common/utf-8';

export const encryptByTeamKey = (
  overview: Record<string, any>,
  teamKey: string,
): Promise<EncryptedData> => {
  return aes.encrypt(utf8.encode(JSON.stringify(overview)), teamKey);
};

export default encryptByTeamKey;
