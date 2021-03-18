import * as forge from 'node-forge';
import { generateRandomSalt } from '~/common';

export const generateKeyPair = () => {
  const seed = generateRandomSalt(32);
  return forge.pki.ed25519.generateKeyPair({ seed: seed });
};

export default generateKeyPair;
