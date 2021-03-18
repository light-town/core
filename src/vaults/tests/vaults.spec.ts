import * as forge from 'node-forge';
import { generateRandomSalt } from '../../common';
import vaults from '../index';

describe('[Vaults] ...', () => {
  it('should encrypt and decrypt private key of primary key set', async () => {
    const keyPair = await vaults.generateKeyPair();
    const privateKey = keyPair.privateKey;

    const data = JSON.stringify({ msg: 'test' });
    const encryptedData = keyPair.publicKey.encrypt(data);

    const symmetricKey = generateRandomSalt(32);

    const encryptedPrivateKeyInfo = vaults.encryptPrivateKey(
      privateKey,
      symmetricKey,
    );

    expect(encryptedPrivateKeyInfo.enc).toEqual('A256GCM');
    expect(encryptedPrivateKeyInfo.key).toBeDefined();

    const decryptedPrivateKey = vaults.decryptPrivateKey(
      encryptedPrivateKeyInfo.key,
      symmetricKey,
    );

    expect(forge.pki.privateKeyToPem(decryptedPrivateKey)).toEqual(
      forge.pki.privateKeyToPem(privateKey),
    );

    expect(decryptedPrivateKey.decrypt(encryptedData)).toStrictEqual(data);
  });

  it('should encrypt and decrypt symmetric key', async () => {
    const symmetricKey = generateRandomSalt(32);
    const masterUnlockKey = generateRandomSalt(32);
    const iterations = 100000; // 100 000 times
    const salt = generateRandomSalt(32);

    const encryptedSymmetricKeyInfo = vaults.encryptSymmetricKey({
      symmetricKey,
      masterUnlockKey,
      iterations,
      salt,
    });

    expect(encryptedSymmetricKeyInfo.iv).toBeDefined();
    expect(encryptedSymmetricKeyInfo.iterations).toEqual(iterations);
    expect(encryptedSymmetricKeyInfo.salt).toEqual(salt);
    expect(typeof encryptedSymmetricKeyInfo.tagLength).toEqual('number');
    expect(encryptedSymmetricKeyInfo.tag).toBeDefined();

    const decryptedSymmetricKey = await vaults.decryptSymmetricKey({
      encryptedSymmetricKey: encryptedSymmetricKeyInfo.key,
      masterUnlockKey,
      iv: encryptedSymmetricKeyInfo.iv,
      tag: encryptedSymmetricKeyInfo.tag,
      tagLength: encryptedSymmetricKeyInfo.tagLength,
    });

    expect(decryptedSymmetricKey).toEqual(symmetricKey);
  });

  it('should encrypt and decrypt vault key', async () => {
    const keyPair = await vaults.generateKeyPair();
    const vaultKey = generateRandomSalt(32);

    const encryptPrivateKeyInfo = vaults.encryptVaultKey(
      vaultKey,
      keyPair.publicKey,
    );

    expect(encryptPrivateKeyInfo.alg).toEqual('RSA-OAEP-256');
    expect(encryptPrivateKeyInfo.kty).toEqual('RSA');
    expect(encryptPrivateKeyInfo.key).toBeDefined();

    const decryptedVaultKey = vaults.decryptVaultKey(
      encryptPrivateKeyInfo.key,
      keyPair.privateKey,
    );

    expect(decryptedVaultKey).toEqual(vaultKey);
  });
});
