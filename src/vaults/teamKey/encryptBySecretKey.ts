import encryptAes from '../../common/aes/encrypt';

export class EncryptedTeamKey {
  kty: string;
  alg: string;
  key: string;
  tag: string;
  tagLength: number;
  iv: string;
}

/**
 * @description Encrypt Team Key with Secret Key
 * @param {String} teamKey
 * @param {String} secretKey Secret Key
 */
export const encryptBySecretKey = async (
  teamKey: string,
  secretKey: string,
): Promise<EncryptedTeamKey> => {
  const encryptedTeamKey = await encryptAes(teamKey, secretKey);

  return Promise.resolve({
    kty: encryptedTeamKey.kty,
    alg: encryptedTeamKey.alg,
    tagLength: encryptedTeamKey.tagLength,
    tag: encryptedTeamKey.tag,
    key: encryptedTeamKey.data,
    iv: encryptedTeamKey.iv,
  });
};

export default encryptBySecretKey;
