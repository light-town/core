import { EncryptedData } from '../../common/aes/encrypt';
import decrypt from '../../common/aes/decrypt';

export const decryptByTeamKey = async (
  metadata: EncryptedData,
  teamKey: string,
): Promise<Record<string, any>> => {
  return JSON.parse(await decrypt(metadata, teamKey));
};

export default decryptByTeamKey;
