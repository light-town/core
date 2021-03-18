import certificates from '../index';
import * as forge from 'node-forge';

describe('[Certificates] ...', () => {
  it('should sign and verify certificate', () => {
    // 1. generate keys on device
    const keyPair = certificates.generateKeyPair();

    // 2. send public ket to server
    // 3. on push notification send to device a public key and generated randomly transaction key
    // 4. sing certificate on device
    const signature = forge.pki.ed25519.sign({
      message: 'test',
      encoding: 'utf8',
      privateKey: keyPair.privateKey,
    });

    // 5. send signature and transaction key to the server
    // 6. verify signature with public key
    const verified = forge.pki.ed25519.verify({
      message: 'test',
      encoding: 'utf8',
      signature: signature,
      publicKey: keyPair.publicKey,
    });

    expect(verified).toBeTruthy();
  });

  it('should fail verifying when private key was not correct', () => {
    const keyPair = certificates.generateKeyPair();

    const signature = forge.pki.ed25519.sign({
      message: 'test',
      encoding: 'utf8',
      privateKey: certificates.generateKeyPair().privateKey,
    });

    const verified = forge.pki.ed25519.verify({
      message: 'test',
      encoding: 'utf8',
      signature: signature,
      publicKey: keyPair.publicKey,
    });

    expect(verified).toBeFalsy();
  });

  it('should fail verifying when public key was not correct', () => {
    const keyPair = certificates.generateKeyPair();

    const signature = forge.pki.ed25519.sign({
      message: 'test',
      encoding: 'utf8',
      privateKey: keyPair.privateKey,
    });

    const verified = forge.pki.ed25519.verify({
      message: 'test',
      encoding: 'utf8',
      signature: signature,
      publicKey: certificates.generateKeyPair().publicKey,
    });

    expect(verified).toBeFalsy();
  });
});
