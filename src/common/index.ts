import generateCryptoRandomString from './generateCryptoRandomString';
import generateAccountKey from './generateAccountKey';
import generateRandomSalt from './generateRandomSalt';
import normalizeMasterPassword from './normalizeMasterPassword';
import deriveMasterUnlockKey from './deriveMasterUnlockKey';
import pbkdf2 from './pbkdf2';
import hkdf from './hkdf';

export {
  hkdf,
  pbkdf2,
  generateAccountKey,
  generateCryptoRandomString,
  generateRandomSalt,
  normalizeMasterPassword,
  deriveMasterUnlockKey,
};

export default {
  hkdf,
  pbkdf2,
  generateAccountKey,
  generateCryptoRandomString,
  generateRandomSalt,
  normalizeMasterPassword,
  deriveMasterUnlockKey,
};
