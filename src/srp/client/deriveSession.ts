import { H, N, g, k } from '../params';
import BigNumber from '../bigNumber';
import * as Types from '../types';

/**
 * @description Devive session
 * @param {String} clientSecretEphemeralKey
 * @param {String} serverPublicEphemeralKey
 * @param {String} salt
 * @param {String} secretKey
 * @param {String} password
 * @return {Types.Session} session
 */
export const deriveSession = (
  clientSecretEphemeralKey: string,
  serverPublicEphemeralKey: string,
  salt: string,
  secretKey: string,
  privateKey: string,
): Types.Session => {
  const a = BigNumber.fromHex(clientSecretEphemeralKey);
  const B = BigNumber.fromHex(serverPublicEphemeralKey);
  const s = BigNumber.fromHex(salt);
  const I = secretKey;
  const x = BigNumber.fromHex(privateKey);

  const A = g.modPow(a, N);

  if (B.mod(N).equals(BigNumber.ZERO)) {
    throw new Error('The server sent an invalid public ephemeral');
  }

  const u = H(A, B);

  const S = B.subtract(k.multiply(g.modPow(x, N))).modPow(
    a.add(u.multiply(x)),
    N,
  );

  const K = H(S);

  const M = H(H(N).xor(H(g)), H(I), s, A, B, K);

  return {
    key: K.toHex(),
    proof: M.toHex(),
  };
};

export default deriveSession;
