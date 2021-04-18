import { EncryptedData } from '../../common/aes/definitions';
import aes from '../../common/aes';

export const encryptByTeamKey = (
  overview: Record<string, any>,
  teamKey: string,
): Promise<EncryptedData> => {
  return aes.encrypt(JSON.stringify(overview), teamKey);
};

export default encryptByTeamKey;
