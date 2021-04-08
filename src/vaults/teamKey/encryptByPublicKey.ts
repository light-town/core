import * as forge from 'node-forge';
import base64 from '../../common/base64';

export class EncryptedTeamKey {
  kty: string;
  alg: string;
  key: string;
}

/**
 * @description Encrypt Team Key with Public key
 * @param {String} teamKey Team Key
 * @param {forge.pki.rsa.PublicKey} publicKey RSA Public key
 * @returns Encrypted Team Key
 */
export const encryptByPublicKey = async (
  teamKey: string,
  publicKey: forge.pki.rsa.PublicKey,
): Promise<EncryptedTeamKey> => {
  const encryptedTeamKey = publicKey.encrypt(teamKey, 'RSA-OAEP', {
    md: forge.md.sha256.create(),
  });

  return Promise.resolve({
    kty: 'RSA',
    alg: 'RSA-OAEP-256',
    key: base64.encode(encryptedTeamKey),
  });
};

export default encryptByPublicKey;
