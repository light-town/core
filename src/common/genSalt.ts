import * as cryptoRandomString from 'crypto-random-string';

export const genSalt = () => {
  return cryptoRandomString({ length: 8 });
};

export default genSalt;
