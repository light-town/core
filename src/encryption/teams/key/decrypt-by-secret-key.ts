import decryptAes from '../../common/aes/decrypt';
import { EncryptedTeamKeyBySecretKey } from './definitions';

/**
 * @param {EncryptedTeamKey} encryptedTeamKey
 * @param {String} secretKey
 * @returns Promise with decrypted Team Key
 * @throws Fail to decrypt Team key
 */
export default async function decryptBySecretKey(
  encryptedTeamKey: EncryptedTeamKeyBySecretKey,
  secretKey: string,
): Promise<string> {
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
}
