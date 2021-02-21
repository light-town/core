import * as srp from 'secure-remote-password/server';

/**
 * @description Generates secret/public ephemeral value pair
 * @param {String} verifier used in signing up
 */
export const generateEphemeral = (verifier: string) => {
  return srp.generateEphemeral(verifier);
};

export default generateEphemeral;
