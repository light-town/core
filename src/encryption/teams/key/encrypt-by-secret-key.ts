import aes from '../../common/aes';
import { EncryptedTeamKeyBySecretKey } from './definitions';

/**
 * @description Encrypt Team Key with Secret Key
 * @param {String} teamKey
 * @param {EncryptedTeamKeyBySecretKey} secretKey Secret Key
 */
export default async function encryptBySecretKey(
  teamKey: string,
  secretKey: string,
): Promise<EncryptedTeamKeyBySecretKey> {
  const encryptedTeamKey = await aes.encrypt(teamKey, secretKey);

  return Promise.resolve({
    kty: encryptedTeamKey.kty,
    alg: encryptedTeamKey.alg,
    tagLength: encryptedTeamKey.tagLength,
    tag: encryptedTeamKey.tag,
    key: encryptedTeamKey.data,
    iv: encryptedTeamKey.iv,
  });
}
