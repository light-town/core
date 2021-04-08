import decryptAes from '../../common/aes/decrypt';
import { EncryptedTeamKey } from './encryptBySecretKey';

/**
 * @param {EncryptedTeamKey} encryptedTeamKey
 * @param {String} secretKey
 * @returns Promise with decrypted Team Key
 * @throws Fail to decrypt Team key
 */
export const decryptBySecretKey = async (
  encryptedTeamKey: EncryptedTeamKey,
  secretKey: string,
): Promise<string> => {
  return await decryptAes(
    {
      kty: encryptedTeamKey.kty,
      alg: encryptedTeamKey.alg,
      tagLength: encryptedTeamKey.tagLength,
      tag: encryptedTeamKey.tag,
      data: encryptedTeamKey.key,
      iv: encryptedTeamKey.iv,
    },
    secretKey,
  );
};

export default decryptBySecretKey;
