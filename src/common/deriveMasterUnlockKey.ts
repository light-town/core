import { computeHash } from './pbkdf2/computeHash';
import hkdf from './hkdf';
import * as forge from 'node-forge';

const ITERACTIONS = 100000; /// 100.000

export const deriveMasterUnlockKey = (
  accountKey: string,
  normalizedMasterPassword: string,
  salt: string,
) => {
  const encryptSalt = hkdf.computeHKDF({
    secret: accountKey,
    salt,
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
    salt,
  };
};

export default deriveMasterUnlockKey;
