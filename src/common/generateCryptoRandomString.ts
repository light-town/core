import * as cryptoRandomString from 'crypto-random-string';

/**
 *  @param {Integer} length
 *  @returns {String} String
 */
export const generateCryptoRandomString = (length: number) =>
  cryptoRandomString({ length, characters: 'ABCDEFGHJKLMNPQRSTVWXYZ23456789' });

export default generateCryptoRandomString;
