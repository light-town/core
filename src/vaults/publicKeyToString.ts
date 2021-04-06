import * as forge from 'node-forge';

/**
 * @description Transform public key to pem format string
 * @param {forge.pki.rsa.PublicKey} publicKey Public key
 * @returns Transformed public key as a string
 */
export const publicKeyToString = (
  publicKey: forge.pki.rsa.PublicKey,
): string => {
  return forge.pki.publicKeyToPem(publicKey);
};

export default publicKeyToString;
