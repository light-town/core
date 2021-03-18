import * as cryptoRandomString from 'crypto-random-string';

export const generateRandomSalt = (length: number) => {
  return cryptoRandomString({ length });
};

export default generateRandomSalt;
