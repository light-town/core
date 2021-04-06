import generateCryptoRandomString from './generateCryptoRandomString';
import generateAccountKey from './generateAccountKey';
import generateRandomSalt from './generateRandomSalt';
import normalizeMasterPassword from './normalizeMasterPassword';
import deriveMasterUnlockKey from './deriveMasterUnlockKey';
import pbkdf2 from './pbkdf2';
import hkdf from './hkdf';
import base64 from './base64';

export {
  hkdf,
  pbkdf2,
  base64,
  generateAccountKey,
  generateCryptoRandomString,
  generateRandomSalt,
  normalizeMasterPassword,
  deriveMasterUnlockKey,
};

export default {
  hkdf,
  pbkdf2,
  base64,
  generateAccountKey,
  generateCryptoRandomString,
  generateRandomSalt,
  normalizeMasterPassword,
  deriveMasterUnlockKey,
};
