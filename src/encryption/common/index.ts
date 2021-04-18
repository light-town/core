import generateCryptoRandomString from './generateCryptoRandomString';
import generateAccountKey from './generateAccountKey';
import generateRandomSalt from './generateRandomSalt';
import normalizeMasterPassword from './normalizeMasterPassword';
import deriveMasterUnlockKey, {
  MasterUnlockKey,
} from './deriveMasterUnlockKey';
import pbkdf2 from './pbkdf2';
import hkdf from './hkdf';
import base64 from './base64';
import rsa from './rsa';

export {
  hkdf,
  pbkdf2,
  base64,
  rsa,
  generateAccountKey,
  generateCryptoRandomString,
  generateRandomSalt,
  normalizeMasterPassword,
  deriveMasterUnlockKey,
  MasterUnlockKey,
};

export default {
  hkdf,
  pbkdf2,
  base64,
  rsa,
  generateAccountKey,
  generateCryptoRandomString,
  generateRandomSalt,
  normalizeMasterPassword,
  deriveMasterUnlockKey,
  MasterUnlockKey,
};
