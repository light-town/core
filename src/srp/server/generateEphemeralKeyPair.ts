import { N, g, k } from '../params';
import BigNumber from '../bigNumber';
import * as Types from '../types';

/**
 * @description Generates public and secret ephemeral key pair
 * @param {String} verifier
 * @return {Types.Ephemeral} ephemeral key pair
 */
export const generateEphemeralKeyPair = (verifier: string): Types.Ephemeral => {
  const v = BigNumber.fromHex(verifier);

  const b = BigNumber.randomInteger(256 / 8);
  const B = k.multiply(v).add(g.modPow(b, N)).mod(N);

  return {
    secret: b.toHex(),
    public: B.toHex(),
  };
};

export default generateEphemeralKeyPair;
