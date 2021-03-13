import SRPClient from '~/srp/client';
import SRPServer from '~/srp/server';
import * as faker from 'faker';
import { genAccountId } from '~/common';

describe('[SRP] ...', () => {
  it('should correct generate verifier in the client', () => {
    const TEST_USER_ID = faker.random.uuid();
    const ACCOUNT_VERSION = 'A1';
    const TEST_ACCOUNT_ID = genAccountId({
      versionCode: ACCOUNT_VERSION,
      userId: TEST_USER_ID,
    });
    const TEST_PASSWORD = faker.internet.password();

    const verifier = SRPClient.deriveVerifier(TEST_ACCOUNT_ID, TEST_PASSWORD);

    expect(typeof verifier.salt).toEqual('string');
    expect(typeof verifier.verifier).toEqual('string');
    expect(typeof verifier.privateKey).toEqual('string');
    expect(TEST_ACCOUNT_ID).toStrictEqual(TEST_ACCOUNT_ID.toUpperCase());

    const trimmedAccountId = TEST_ACCOUNT_ID.split('-').join('');
    const trimmedUserId = TEST_USER_ID.split('-').join('').toUpperCase();

    expect(trimmedAccountId).not.toStrictEqual(TEST_ACCOUNT_ID);
    expect(trimmedAccountId.slice(0, 2)).toEqual(ACCOUNT_VERSION);
    expect(trimmedAccountId.slice(2, 12)).toEqual(trimmedUserId.slice(0, 10));
  });

  it('should correct generate verifier in the server', () => {
    // client
    const USER_ID = faker.random.uuid();
    const ACCOUNT_VERSION = 'A1';
    const TEST_ACCOUNT_ID = genAccountId({
      versionCode: ACCOUNT_VERSION,
      userId: USER_ID,
    });
    const TEST_PASSWORD = faker.internet.password();

    const { salt, verifier } = SRPClient.deriveVerifier(
      TEST_ACCOUNT_ID,
      TEST_PASSWORD,
    );

    const clientEphemeral = SRPClient.generateEphemeral();

    expect(typeof clientEphemeral.public).toEqual('string');
    expect(typeof clientEphemeral.secret).toEqual('string');

    // server

    const serverEphemeral = SRPServer.generateEphemeral(verifier);

    expect(typeof serverEphemeral.public).toEqual('string');
    expect(typeof serverEphemeral.secret).toEqual('string');

    // client

    const clientSession = SRPClient.deriveSession(
      salt,
      TEST_ACCOUNT_ID,
      TEST_PASSWORD,
      clientEphemeral.secret,
      serverEphemeral.public,
    );

    expect(typeof clientSession.key).toEqual('string');
    expect(typeof clientSession.proof).toEqual('string');

    // server

    const serverSession = SRPServer.deriveSession(
      serverEphemeral.secret,
      clientEphemeral.public,
      salt,
      TEST_ACCOUNT_ID,
      verifier,
      clientSession.proof,
    );

    expect(typeof serverSession.key).toEqual('string');
    expect(typeof serverSession.proof).toEqual('string');

    // client

    SRPClient.verifySession(
      clientEphemeral.public,
      clientSession,
      serverSession.proof,
    );
  });

  it('should throw error while verifying session with invalid proof key', () => {
    // client
    const USER_ID = faker.random.uuid();
    const ACCOUNT_VERSION = 'A1';
    const TEST_ACCOUNT_ID = genAccountId({
      versionCode: ACCOUNT_VERSION,
      userId: USER_ID,
    });
    const TEST_PASSWORD = faker.internet.password();

    const { salt, verifier } = SRPClient.deriveVerifier(
      TEST_ACCOUNT_ID,
      TEST_PASSWORD,
    );

    const clientEphemeral = SRPClient.generateEphemeral();

    expect(typeof clientEphemeral.public).toEqual('string');
    expect(typeof clientEphemeral.secret).toEqual('string');

    // server

    const serverEphemeral = SRPServer.generateEphemeral(verifier);

    expect(typeof serverEphemeral.public).toEqual('string');
    expect(typeof serverEphemeral.secret).toEqual('string');

    // client

    const clientSession = SRPClient.deriveSession(
      salt,
      TEST_ACCOUNT_ID,
      TEST_PASSWORD,
      clientEphemeral.secret,
      serverEphemeral.public,
    );

    expect(typeof clientSession.key).toEqual('string');
    expect(typeof clientSession.proof).toEqual('string');

    // server

    const serverSession = SRPServer.deriveSession(
      serverEphemeral.secret,
      clientEphemeral.public,
      salt,
      TEST_ACCOUNT_ID,
      verifier,
      clientSession.proof,
    );

    expect(typeof serverSession.key).toEqual('string');
    expect(typeof serverSession.proof).toEqual('string');

    // client

    expect(() =>
      SRPClient.verifySession(
        faker.random.uuid(),
        clientSession,
        serverSession.proof,
      ),
    ).toThrowError();
  });
});
