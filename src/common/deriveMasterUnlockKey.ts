import { computeHash } from './pbkdf2/computeHash';
import hkdf from './hkdf';
import * as forge from 'node-forge';
import base64 from './base64';
import generateRandomSalt from './generateRandomSalt';

export const ITERACTIONS = 100000; /// 100.000

export const deriveMasterUnlockKey = (
  accountKey: string,
  normalizedMasterPassword: string,
  salt?: string,
) => {
  const s = salt ? base64.decode(salt) : generateRandomSalt(32);

  const encryptSalt = hkdf.computeHKDF({
    secret: accountKey,
    salt: s,
  });
  const intermediateKey = hkdf.computeHKDF({
    secret: normalizedMasterPassword,
    salt: encryptSalt,
  });
  return {
    key: forge.util
      .createBuffer(
        computeHash({
          secretKey: intermediateKey,
          salt: encryptSalt,
          iterations: ITERACTIONS,
        }),
      )
      .toHex(),
    iterations: ITERACTIONS,
    salt: base64.encode(s),
  };
};

export default deriveMasterUnlockKey;
