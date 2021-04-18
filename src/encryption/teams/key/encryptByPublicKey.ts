import * as forge from 'node-forge';
import base64 from '../../../encryption/common/base64';
import { EncryptedTeamKeyByPublicKey } from './definitions';
import { PublicKey } from '../../../encryption/common/rsa/definitions';

/**
 * @description Encrypt Team Key with Public key
 * @param {String} teamKey Team Key
 * @param {PublicKey} publicKey RSA Public key
 * @returns Encrypted Team Key
 */
export default async function encryptByPublicKey(
  teamKey: string,
  publicKey: PublicKey,
): Promise<EncryptedTeamKeyByPublicKey> {
  const encryptedTeamKey = publicKey.encrypt(teamKey, 'RSA-OAEP', {
    md: forge.md.sha256.create(),
  });

  return Promise.resolve({
    kty: 'RSA',
    alg: 'RSA-OAEP-256',
    key: base64.encode(encryptedTeamKey),
  });
}
