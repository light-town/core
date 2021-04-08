import * as forge from 'node-forge';
import base64 from '../../common/base64';

export class EncryptedPrivateKey {
  kty: string;
  alg: string;
  key: string;
}

/**
 * @description Encrypt Private Key With Symmetric Key
 * @param {forge.pki.PrivateKey} privateKey Private Key
 * @param {forge.Base64} symmetricKey Symmetric Key
 * @return {EncryptedPrivateKey}
 */
export const encryptBySymmetricKey = (
  privateKey: forge.pki.PrivateKey,
  symmetricKey: string,
): Promise<EncryptedPrivateKey> => {
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
};

export default encryptBySymmetricKey;
