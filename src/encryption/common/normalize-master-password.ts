import * as unorm from 'unorm';

/**
 * @description Normalize using nkdf algorithm
 * @param {String} password
 * @returns
 */
export const normalizeMasterPassword = (password: string): string => {
  const trimmedPassword = password.trim();
  const combiningCharacters = /[\u0300-\u036F]/g;
  return unorm.nfkd(trimmedPassword).replace(combiningCharacters, '');
};

export default normalizeMasterPassword;
