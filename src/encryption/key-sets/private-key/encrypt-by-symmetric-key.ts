import * as forge from 'node-forge';
import base64 from '../../common/base64';
import { EncryptedPrivateKeyBySymmetricKey } from './definitions';
import { PrivateKey } from '../../common/rsa/definitions';

/**
 * @description Encrypt Private Key With Symmetric Key
 * @param {PrivateKey} privateKey Private Key
 * @param {forge.Base64} symmetricKey Symmetric Key
 * @return {EncryptedPrivateKey}
 */
export default function encryptBySymmetricKey(
  privateKey: PrivateKey,
  symmetricKey: string,
): Promise<EncryptedPrivateKeyBySymmetricKey> {
  const asn1PrivateKey = forge.pki.privateKeyToAsn1(privateKey);

  const encryptedPrivateKey = forge.pki.encryptPrivateKeyInfo(
    asn1PrivateKey,
    symmetricKey,
    {
      algorithm: 'aes256',
    },
  );

  return Promise.resolve({
    kty: 'AES',
    alg: 'AES-GCM-256',
    key: base64.encode(forge.pki.encryptedPrivateKeyToPem(encryptedPrivateKey)),
  });
}
