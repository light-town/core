import * as forge from 'node-forge';

/**
 * Hash-based Key Derivation Function
 * @param {Object}
 */

export const computeHKDF = ({ secret, salt }) => {
  const hmac = forge.hmac.create();
  hmac.start('sha256', secret);
  hmac.update(salt);
  return hmac.digest().toHex();
};

export default computeHKDF;
