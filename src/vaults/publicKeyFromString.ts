import * as forge from 'node-forge';
import base64 from '../common/base64';

/**
 * @description Transform pem string to public key
 * @param {String} publicKey Public key as a string
 * @returns Transformed public key
 */
export const publicKeyFromString = (pem: string): forge.pki.rsa.PublicKey => {
  return forge.pki.publicKeyFromPem(base64.decode(pem));
};

export default publicKeyFromString;
