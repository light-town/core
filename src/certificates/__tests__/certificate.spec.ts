import certificates from '../index';

describe('[Certificates] ...', () => {
  it('should sign and verify certificate', () => {
    const TEST_MESSAGE = 'test';
    // 1. generate keys on device
    const keyPair = certificates.generateKeyPair();

    // 2. send public ket to server
    // 3. on push notification send to device a public key and generated randomly transaction key
    // 4. sing certificate on device
    const signature = certificates.signCertificate(
      keyPair.privateKey,
      TEST_MESSAGE,
      { encoding: 'utf8' },
    );

    // 5. send signature and transaction key to the server
    // 6. verify signature with public key
    const verified = certificates.verifyCertificate(
      keyPair.publicKey,
      signature,
      TEST_MESSAGE,
      { encoding: 'utf8' },
    );

    expect(verified).toBeTruthy();
  });

  it('should fail verifying when private key was not correct', () => {
    const TEST_MESSAGE = 'test';

    const keyPair = certificates.generateKeyPair();

    const signature = certificates.signCertificate(
      certificates.generateKeyPair().privateKey,
      TEST_MESSAGE,
      { encoding: 'utf8' },
    );

    const verified = certificates.verifyCertificate(
      keyPair.publicKey,
      signature,
      TEST_MESSAGE,
      { encoding: 'utf8' },
    );

    expect(verified).toBeFalsy();
  });

  it('should fail verifying when public key was not correct', () => {
    const TEST_MESSAGE = 'test';
    const keyPair = certificates.generateKeyPair();

    const signature = certificates.signCertificate(
      keyPair.privateKey,
      TEST_MESSAGE,
      { encoding: 'utf8' },
    );

    const verified = certificates.verifyCertificate(
      certificates.generateKeyPair().publicKey,
      signature,
      TEST_MESSAGE,
      { encoding: 'utf8' },
    );

    expect(verified).toBeFalsy();
  });
});
