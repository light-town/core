import encrypt, { EncryptedData } from '../../common/aes/encrypt';

export const encryptByTeamKey = (
  metadata: Record<string, any>,
  teamKey: string,
): Promise<EncryptedData> => {
  return encrypt(JSON.stringify(metadata), teamKey);
};

export default encryptByTeamKey;
