import SRPClient from '~/srp/client';
import SRPServer from '~/srp/server';
import * as faker from 'faker';
import { genAccountId } from '~/common';

describe('[SRP] ...', () => {
  it('should correct generate verifier in the client', () => {
    const USER_ID = faker.random.uuid();
    const ACCOUNT_VERSION = 'A1';
    const TEST_ACCOUNT_ID = genAccountId({
      versionCode: ACCOUNT_VERSION,
      userId: USER_ID,
    });
    const TEST_PASSWORD = faker.internet.password();

    const verifier = SRPClient.deriveVerifier(TEST_ACCOUNT_ID, TEST_PASSWORD);

    expect(verifier.salt).toBeDefined();
    expect(verifier.verifier).toBeDefined();
    expect(verifier.privateKey).toBeDefined();
    expect(TEST_ACCOUNT_ID).toStrictEqual(TEST_ACCOUNT_ID.toUpperCase());

    const trimmedAccountId = TEST_ACCOUNT_ID.split('-').join('');
    const trimmedUserId = USER_ID.split('-').join('').toUpperCase();

    expect(trimmedAccountId).not.toStrictEqual(TEST_ACCOUNT_ID);
    expect(trimmedAccountId.slice(0, 2)).toEqual(ACCOUNT_VERSION);
    expect(trimmedAccountId.slice(2, 12)).toEqual(trimmedUserId.slice(0, 10));
  });

  it('should correct generate verifier in the server', () => {
    const USER_ID = faker.random.uuid();
    const ACCOUNT_VERSION = 'A1';
    const TEST_ACCOUNT_ID = genAccountId({
      versionCode: ACCOUNT_VERSION,
      userId: USER_ID,
    });
    const TEST_PASSWORD = faker.internet.password();

    const { salt, verifier, privateKey } = SRPClient.deriveVerifier(
      TEST_ACCOUNT_ID,
      TEST_PASSWORD,
    );

    const clientEphemeral = SRPClient.generateEphemeral();

    expect(clientEphemeral.public).toBeDefined();
    expect(clientEphemeral.secret).toBeDefined();

    const serverEphemeral = SRPServer.generateEphemeral(verifier);

    expect(serverEphemeral.public).toBeDefined();
    expect(serverEphemeral.secret).toBeDefined();
  });
});
