import * as forge from 'node-forge';
import base64 from '../base64';
import { PublicKey } from './definitions';

/**
 * @description Transform public key to pem format string
 * @param {PublicKey} publicKey Public key
 * @returns Transformed public key as a string
 */
export default function publicKeyToString(publicKey: PublicKey): string {
  return base64.encode(forge.pki.publicKeyToPem(publicKey));
}
