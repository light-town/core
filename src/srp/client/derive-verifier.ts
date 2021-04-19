import { N, g } from '../params';
import BigNumber from '../big-number';

/**
 * @description Derive verifier
 * @param {String} privateKey
 * @returns {String} verifier
 */
export const deriveVerifier = (privateKey: string): string => {
  const x = BigNumber.fromHex(privateKey);
  const v = g.modPow(x, N);
  return v.toHex();
};

export default deriveVerifier;
