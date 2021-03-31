import client from './client';
import server from './server';
import * as Types from './types';
import BigNumber from './big-number';

export default {
  client: {
    /**
     * @description Generates public and secret ephemeral key pair
     * @return {Types.Ephemeral} ephemeral key pair
     */
    generateEphemeralKeyPair(): Types.Ephemeral {
      return client.generateEphemeralKeyPair();
    },

    /**
     * @description Devive verifier
     * @param {String} secretKey
     * @param {String} password
     * @returns {String} verifier
     */
    deriveVerifier(secretKey: string, password: string): Types.Verifier {
      const salt = BigNumber.randomInteger(256 / 8).toHex();
      const privateKey = client.derivePrivateKey(secretKey, password, salt);
      const verifier = client.deriveVerifier(privateKey);
      return {
        verifier,
        privateKey,
        salt,
      };
    },

    /**
     * @description Devive session
     * @param {String} clientSecretEphemeralKey
     * @param {String} serverPublicEphemeralKey
     * @param {String} salt
     * @param {String} secretKey
     * @param {String} password
     * @return {Types.Session} session
     */
    deriveSession(
      clientSecretEphemeralKey: string,
      serverPublicEphemeralKey: string,
      salt: string,
      secretKey: string,
      privateKey: string,
    ): Types.Session {
      return client.deriveSession(
        clientSecretEphemeralKey,
        serverPublicEphemeralKey,
        salt,
        secretKey,
        privateKey,
      );
    },

    /**
     * @description Verify session
     * @param {String} clientPublicEphemeral
     * @param {Types.Session} clientSession
     * @param {String} serverSessionProof
     * @throws Throws an error if the session proof is invalid
     */
    verifySession(
      clientPublicEphemeral: string,
      clientSession: Types.Session,
      serverSessionProof: string,
    ): void {
      return client.verifySession(
        clientPublicEphemeral,
        clientSession,
        serverSessionProof,
      );
    },
  },
  server: {
    /**
     * @description Generates public and secret ephemeral key pair
     * @param {String} verifier
     * @return {Types.Ephemeral} ephemeral key pair
     */
    generateEphemeralKeyPair(verifier: string): Types.Ephemeral {
      return server.generateEphemeralKeyPair(verifier);
    },

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
    deriveSession(
      serverSecretEphemeralKey: string,
      clientPublicEphemeralKey: string,
      salt: string,
      secretKey: string,
      verifier: string,
      clientSessionProofKey: string,
    ): Types.Session {
      return server.deriveSession(
        serverSecretEphemeralKey,
        clientPublicEphemeralKey,
        salt,
        secretKey,
        verifier,
        clientSessionProofKey,
      );
    },
  },
};
