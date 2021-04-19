import * as forge from 'node-forge';
import * as faker from 'faker';
import common from '../../common';
import keySets from '../index';

describe('[Key Sets] ...', () => {
  it('should encrypt and decrypt private key by symmetric key of primary key set', async () => {
    const { publicKey, privateKey } = await common.rsa.generateKeyPair();
    const symmetricKey = common.generateCryptoRandomString(32);

    const data = JSON.stringify({ msg: 'test' });
    const encryptedData = publicKey.encrypt(data);

    const encryptedPrivateKey = await keySets.privateKey.encryptBySymmetricKey(
      privateKey,
      symmetricKey,
    );

    expect(encryptedPrivateKey.kty).toStrictEqual('AES');
    expect(encryptedPrivateKey.alg).toStrictEqual('AES-GCM-256');
    expect(encryptedPrivateKey.key).toBeDefined();

    const decryptedPrivateKey = await keySets.privateKey.decryptBySymmetricKey(
      encryptedPrivateKey,
      symmetricKey,
    );

    expect(forge.pki.privateKeyToPem(decryptedPrivateKey)).toStrictEqual(
      forge.pki.privateKeyToPem(privateKey),
    );

    expect(decryptedPrivateKey.decrypt(encryptedData)).toStrictEqual(data);
  });

  it('should encrypt and decrypt symmetric key by master unlock key', async () => {
    const symmetricKey = common.generateCryptoRandomString(32);
    const masterUnlockKey = common.generateCryptoRandomString(32);
    const masterUnlockSalt = common.generateRandomSalt(32);

    const encryptedSymmetricKey = await keySets.symmetricKey.encryptBySecretKey(
      symmetricKey,
      masterUnlockKey,
      masterUnlockSalt,
    );

    expect(encryptedSymmetricKey.kty).toStrictEqual('AES');
    expect(encryptedSymmetricKey.alg).toStrictEqual('AES-GCM-256');
    expect(encryptedSymmetricKey.iv).toBeDefined();
    expect(typeof encryptedSymmetricKey.tagLength).toStrictEqual('number');
    expect(encryptedSymmetricKey.tag).toBeDefined();

    const decryptedSymmetricKey = await keySets.symmetricKey.decryptBySecretKey(
      encryptedSymmetricKey,
      masterUnlockKey,
    );

    expect(decryptedSymmetricKey).toStrictEqual(symmetricKey);
  });

  it('should encrypt and decrypt symmetric key by public and private keys of primary key set', async () => {
    const { publicKey, privateKey } = await common.rsa.generateKeyPair();
    const symmetricKey = common.generateCryptoRandomString(32);

    const encryptedSymmetricKey = await keySets.symmetricKey.encryptByPublicKey(
      symmetricKey,
      publicKey,
    );

    expect(encryptedSymmetricKey).toStrictEqual({
      kty: 'RSA',
      alg: 'RSA-OAEP-256',
      key: encryptedSymmetricKey.key,
    });
    expect(encryptedSymmetricKey.key).toBeDefined();

    const decryptedSymmetricKey = await keySets.symmetricKey.decryptByPrivateKey(
      encryptedSymmetricKey,
      privateKey,
    );

    expect(decryptedSymmetricKey).toStrictEqual(symmetricKey);
  });

  it('should transform public key to pem string and vice versa', async () => {
    const { publicKey, privateKey } = await common.rsa.generateKeyPair();

    const pem = common.rsa.publicKeyToString(publicKey);

    expect(typeof pem).toStrictEqual('string');

    const data = faker.random.word();
    const encData = common.rsa.publicKeyFromString(pem).encrypt(data);

    expect(privateKey.decrypt(encData)).toStrictEqual(data);
  });
});
