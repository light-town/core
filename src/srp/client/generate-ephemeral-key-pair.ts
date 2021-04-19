import { N, g } from '../params';
import BigNumber from '../big-number';
import * as Types from '../types';

/**
 * @description Generates public and secret ephemeral key pair
 * @return {Types.Ephemeral} ephemeral key pair
 */
export const generateEphemeralKeyPair = (): Types.Ephemeral => {
  const a = BigNumber.randomInteger(256 / 8);
  const A = g.modPow(a, N);
  return {
    secret: a.toHex(),
    public: A.toHex(),
  };
};

export default generateEphemeralKeyPair;
