import * as forge from 'node-forge';
import base64 from '../../common/base64';
import { EncryptedTeamKey } from './encryptByPublicKey';

/**
 * @description Decrypt Team Key with Private Key
 * @param {EncryptedTeamKey} encryptedTeamKey
 * @param {forge.pki.rsa.PrivateKey} privateKey
 * @returns {String} Team Key
 */
export const decryptByPrivateKey = (
  encryptedTeamKey: EncryptedTeamKey,
  privateKey: forge.pki.rsa.PrivateKey,
): Promise<string> => {
  return Promise.resolve(
    privateKey.decrypt(base64.decode(encryptedTeamKey.key), 'RSA-OAEP', {
      md: forge.md.sha256.create(),
    }),
  );
};

export default decryptByPrivateKey;
