import * as forge from 'node-forge';

/**
 *  @param {Integer} length
 *  @returns {String} String
 */
export const generateCryptoRandomString = (length: number) =>
  forge.util.bytesToHex(forge.random.getBytesSync(length)).toUpperCase();

export default generateCryptoRandomString;
