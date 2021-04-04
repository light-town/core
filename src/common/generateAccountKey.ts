import { generateCryptoRandomString } from './generateCryptoRandomString';

export interface Options {
  versionCode: string;
  secret: string;
}

export const toFormatKey = (key: string) =>
  `${key.slice(0, 2)}-${key.slice(2, 8)}-${key.slice(8, 14)}-${key.slice(
    14,
    19,
  )}-${key.slice(19, 24)}-${key.slice(24, 29)}-${key.slice(29, 34)}`;

/**
 *  @description Generate a Account Unique Key
 *  @returns {String} Account Unique Key
 *  @example A3-ASWWYB-798JRY-LJVD4-23DC2-86TVM-H43EB
 */
export const generateAccountKey = (options: Options) => {
  const trimmedUserId = options.secret.toUpperCase();

  const length = 34 - (options.versionCode.length + trimmedUserId.length);

  const randomString = generateCryptoRandomString(length);

  const accountId = options.versionCode.concat(trimmedUserId, randomString);
  return toFormatKey(accountId);
};

export default generateAccountKey;
