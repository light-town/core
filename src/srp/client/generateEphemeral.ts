import * as srp from 'secure-remote-password/client';

/**
 * @description Generates secret/public ephemeral value pair
 */
export const generateEphemeral = () => {
  return srp.generateEphemeral();
};

export default generateEphemeral;
