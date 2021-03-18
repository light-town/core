import * as cryptoRandomString from 'crypto-random-string';

export const generateSalt = () => {
  return cryptoRandomString({ length: 32 });
};

export default generateSalt;
