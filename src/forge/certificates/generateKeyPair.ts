import * as forge from 'node-forge';

export const generateKeyPair = () => {
  const seed = forge.random.getBytesSync(32);
  return forge.pki.ed25519.generateKeyPair({ seed: seed });
};

export default generateKeyPair;
