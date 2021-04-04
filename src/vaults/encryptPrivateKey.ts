import * as forge from 'node-forge';

/**
 * @description Encrypt Private Key With Symmetric Key
 * @param {forge.pki.PrivateKey} privateKey Private Key
 * @param {forge.Base64} symmetricKey Symmetric Key
 */
export const encryptPrivateKey = (
  privateKey: forge.pki.PrivateKey,
  symmetricKey: string,
) => {
  const asn1PrivateKey = forge.pki.privateKeyToAsn1(privateKey);

  const encryptedPrivateKey = forge.pki.encryptPrivateKeyInfo(
    asn1PrivateKey,
    symmetricKey,
    {
      algorithm: 'aes256',
    },
  );

  return {
    kty: 'AES',
    alg: 'AES-GCM-256',
    key: forge.pki.encryptedPrivateKeyToPem(encryptedPrivateKey),
  };
};
