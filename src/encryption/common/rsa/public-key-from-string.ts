import * as forge from 'node-forge';
import base64 from '../base64';
import { PublicKey } from './definitions';

/**
 * @description Transform pem string to public key
 * @param {String} publicKey Public key as a string
 * @returns Transformed public key
 */
export default function publicKeyFromString(pem: string): PublicKey {
  return forge.pki.publicKeyFromPem(base64.decode(pem));
}
