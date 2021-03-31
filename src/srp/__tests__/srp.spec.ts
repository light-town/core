import srp from '../index';
import * as faker from 'faker';
import { generateAccountKey } from '../../common';

describe('[SRP] ...', () => {
  it('should correct generate verifier in the client', () => {
    const TEST_USER_ID = faker.datatype
      .uuid()
      .split('-')
      .join('')
      .toUpperCase();
    const ACCOUNT_VERSION = 'A1';
    const TEST_ACCOUNT_ID = generateAccountKey({
      versionCode: ACCOUNT_VERSION,
      secret: TEST_USER_ID,
    });
    const TEST_PASSWORD = faker.internet.password();

    const verifier = srp.client.deriveVerifier(TEST_ACCOUNT_ID, TEST_PASSWORD);

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
    const USER_ID = faker.datatype.uuid().split('-').join('').toUpperCase();
    const ACCOUNT_VERSION = 'A1';
    const TEST_ACCOUNT_ID = generateAccountKey({
      versionCode: ACCOUNT_VERSION,
      secret: USER_ID,
    });
    const TEST_PASSWORD = faker.internet.password();

    const { salt, verifier, privateKey } = srp.client.deriveVerifier(
      TEST_ACCOUNT_ID,
      TEST_PASSWORD,
    );

    const clientEphemeral = srp.client.generateEphemeralKeyPair();

    expect(typeof clientEphemeral.public).toEqual('string');
    expect(typeof clientEphemeral.secret).toEqual('string');

    // server

    const serverEphemeral = srp.server.generateEphemeralKeyPair(verifier);

    expect(typeof serverEphemeral.public).toEqual('string');
    expect(typeof serverEphemeral.secret).toEqual('string');

    // client

    const clientSession = srp.client.deriveSession(
      clientEphemeral.secret,
      serverEphemeral.public,
      salt,
      TEST_ACCOUNT_ID,
      privateKey,
    );

    expect(typeof clientSession.key).toEqual('string');
    expect(typeof clientSession.proof).toEqual('string');

    // server

    const serverSession = srp.server.deriveSession(
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

    srp.client.verifySession(
      clientEphemeral.public,
      clientSession,
      serverSession.proof,
    );
  });

  it('should throw error while verifying session with invalid proof key', () => {
    // client
    const USER_ID = faker.datatype.uuid().split('-').join('').toUpperCase();
    const ACCOUNT_VERSION = 'A1';
    const TEST_ACCOUNT_ID = generateAccountKey({
      versionCode: ACCOUNT_VERSION,
      secret: USER_ID,
    });
    const TEST_PASSWORD = faker.internet.password();

    const { salt, verifier, privateKey } = srp.client.deriveVerifier(
      TEST_ACCOUNT_ID,
      TEST_PASSWORD,
    );

    const clientEphemeral = srp.client.generateEphemeralKeyPair();

    expect(typeof clientEphemeral.public).toEqual('string');
    expect(typeof clientEphemeral.secret).toEqual('string');

    // server

    const serverEphemeral = srp.server.generateEphemeralKeyPair(verifier);

    expect(typeof serverEphemeral.public).toEqual('string');
    expect(typeof serverEphemeral.secret).toEqual('string');

    // client

    const clientSession = srp.client.deriveSession(
      clientEphemeral.secret,
      serverEphemeral.public,
      salt,
      TEST_ACCOUNT_ID,
      privateKey,
    );

    expect(typeof clientSession.key).toEqual('string');
    expect(typeof clientSession.proof).toEqual('string');

    // server

    const serverSession = srp.server.deriveSession(
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
      srp.client.verifySession(
        faker.datatype.uuid(),
        clientSession,
        serverSession.proof,
      ),
    ).toThrowError();
  });
});
