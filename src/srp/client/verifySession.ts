import { H } from '../params';
import BigNumber from '../bigNumber';
import * as Types from '../types';

/**
 * @description Verify session
 * @param {String} clientPublicEphemeral
 * @param {Types.Session} clientSession
 * @param {String} serverSessionProof
 * @throws Throws an error if the session proof is invalid
 */
export const verifySession = (
  clientPublicEphemeral: string,
  clientSession: Types.Session,
  serverSessionProof: string,
): void => {
  const A = BigNumber.fromHex(clientPublicEphemeral);
  const M = BigNumber.fromHex(clientSession.proof);
  const K = BigNumber.fromHex(clientSession.key);

  const expected = H(A, M, K);
  const actual = BigNumber.fromHex(serverSessionProof);

  if (!actual.equals(expected)) {
    throw new Error('Server provided session proof is invalid');
  }
};

export default verifySession;
