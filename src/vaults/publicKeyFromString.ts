import * as forge from 'node-forge';

/**
 * @description Transform pem string to public key
 * @param {String} publicKey Public key as a string
 * @returns Transformed public key
 */
export const publicKeyFromString = (pem: string): forge.pki.rsa.PublicKey => {
  return forge.pki.publicKeyFromPem(pem);
};

export default publicKeyFromString;
