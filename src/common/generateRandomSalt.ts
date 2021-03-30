import * as forge from 'node-forge';

export const generateRandomSalt = (length: number) => {
  return forge.random.getBytesSync(length);
};

export default generateRandomSalt;
