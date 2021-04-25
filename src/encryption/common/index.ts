import generateCryptoRandomString from './generate-crypto-random-string';
import generateAccountKey from './generate-account-key';
import generateRandomSalt from './generate-random-salt';
import normalizeMasterPassword from './normalize-master-password';
import deriveMasterUnlockKey, {
  MasterUnlockKey,
} from './derive-master-unlock-key';
import pbkdf2 from './pbkdf2';
import hkdf from './hkdf';
import base64 from './base64';
import utf8 from './utf-8';
import rsa from './rsa';

export {
  hkdf,
  pbkdf2,
  base64,
  utf8,
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
  utf8,
  rsa,
  generateAccountKey,
  generateCryptoRandomString,
  generateRandomSalt,
  normalizeMasterPassword,
  deriveMasterUnlockKey,
  MasterUnlockKey,
};
