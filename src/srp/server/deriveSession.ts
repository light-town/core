import { H, N, g, k } from '../params';
import BigNumber from '../bigNumber';
import * as Types from '../types';

/**
 * @deriveSession Device session
 * @param {String} serverSecretEphemeralKey
 * @param {String} clientPublicEphemeralKey
 * @param {String} salt
 * @param {String} secretKey
 * @param {String} verifier
 * @param {String} clientSessionProofKey
 * @return {Types.Session} session
 */
export const deriveSession = (
  serverSecretEphemeralKey: string,
  clientPublicEphemeralKey: string,
  salt: string,
  secretKey: string,
  verifier: string,
  clientSessionProofKey: string,
): Types.Session => {
  const b = BigNumber.fromHex(serverSecretEphemeralKey);
  const A = BigNumber.fromHex(clientPublicEphemeralKey);
  const s = BigNumber.fromHex(salt);
  const I = secretKey;
  const v = BigNumber.fromHex(verifier);

  const B = k.multiply(v).add(g.modPow(b, N)).mod(N);

  if (A.mod(N).equals(BigNumber.ZERO)) {
    throw new Error('The client sent an invalid public ephemeral');
  }

  const u = H(A, B);

  const S = A.multiply(v.modPow(u, N)).modPow(b, N);

  const K = H(S);

  const M = H(H(N).xor(H(g)), H(I), s, A, B, K);

  const expected = M;
  const actual = BigNumber.fromHex(clientSessionProofKey);

  if (!actual.equals(expected)) {
    throw new Error('Client provided session proof is invalid');
  }

  const P = H(A, M, K);

  return {
    key: K.toHex(),
    proof: P.toHex(),
  };
};

export default deriveSession;
