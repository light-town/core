import * as forge from 'node-forge';

/**
 * @description Generate random salt in hex format
 * @param {Number} length the length of salt
 * @returns {String} salt
 */
export const generateRandomSalt = (length: number): string => {
  return forge.random.getBytesSync(length);
};

export default generateRandomSalt;
