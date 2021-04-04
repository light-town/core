import * as forge from 'node-forge';
import common from '../../common';
import vaults from '../index';
import * as faker from 'faker';

describe('[Vaults] ...', () => {
  it('should encrypt and decrypt private key of primary key set', async () => {
    const { publicKey, privateKey } = await vaults.generateKeyPair();

    const data = JSON.stringify({ msg: 'test' });
    const encryptedData = publicKey.encrypt(data);

    const symmetricKey = common.generateCryptoRandomString(32);

    const encryptedPrivateKeyInfo = vaults.encryptPrivateKey(
      privateKey,
      symmetricKey,
    );

    expect(encryptedPrivateKeyInfo.enc).toStrictEqual('A256GCM');
    expect(encryptedPrivateKeyInfo.key).toBeDefined();

    const decryptedPrivateKey = vaults.decryptPrivateKey(
      encryptedPrivateKeyInfo.key,
      symmetricKey,
    );

    expect(forge.pki.privateKeyToPem(decryptedPrivateKey)).toStrictEqual(
      forge.pki.privateKeyToPem(privateKey),
    );

    expect(decryptedPrivateKey.decrypt(encryptedData)).toStrictEqual(data);
  });

  it('should encrypt and decrypt symmetric key', async () => {
    const symmetricKey = common.generateCryptoRandomString(32);
    const masterUnlockKey = common.generateCryptoRandomString(32);

    const encryptedSymmetricKeyInfo = vaults.encryptSymmetricKey({
      symmetricKey,
      secretKey: masterUnlockKey,
    });

    expect(encryptedSymmetricKeyInfo.iv).toBeDefined();
    expect(typeof encryptedSymmetricKeyInfo.tagLength).toStrictEqual('number');
    expect(encryptedSymmetricKeyInfo.tag).toBeDefined();

    const decryptedSymmetricKey = await vaults.decryptSymmetricKey({
      encryptedSymmetricKey: encryptedSymmetricKeyInfo.key,
      secretKey: masterUnlockKey,
      iv: encryptedSymmetricKeyInfo.iv,
      tag: encryptedSymmetricKeyInfo.tag,
      tagLength: encryptedSymmetricKeyInfo.tagLength,
    });

    expect(decryptedSymmetricKey).toStrictEqual(symmetricKey);
  });

  it('should encrypt and decrypt vault key', async () => {
    const { publicKey, privateKey } = await vaults.generateKeyPair();
    const vaultKey = common.generateCryptoRandomString(32);

    const encryptVaultKeyInfo = vaults.encryptVaultKey(vaultKey, publicKey);
    expect(encryptVaultKeyInfo.alg).toStrictEqual('RSA-OAEP-256');
    expect(encryptVaultKeyInfo.kty).toStrictEqual('RSA');
    expect(encryptVaultKeyInfo.key).toBeDefined();

    const decryptedVaultKey = vaults.decryptVaultKey(
      encryptVaultKeyInfo.key,
      privateKey,
    );

    expect(decryptedVaultKey).toStrictEqual(vaultKey);
  });

  it('should generate Master Unlock Key and Vault Key and encrypt them', async () => {
    const masterPassword = faker.random.word();
    const normalizedMasterPassword = common.normalizeMasterPassword(
      masterPassword,
    );

    const accountKey = common.generateAccountKey({
      versionCode: 'A3',
      secret: common.generateCryptoRandomString(32),
    });

    const salt = common.generateRandomSalt(32);
    const { key: masterUnlockKey } = common.deriveMasterUnlockKey(
      accountKey,
      normalizedMasterPassword,
      salt,
    );

    const symmetricKey = common.generateCryptoRandomString(32);
    const vaultKey = common.generateCryptoRandomString(32);
    const { publicKey, privateKey } = await vaults.generateKeyPair();
    const encryptedVaultKey = vaults.encryptVaultKey(vaultKey, publicKey);
    const encryptedPrivateKey = vaults.encryptPrivateKey(
      privateKey,
      symmetricKey,
    );
    const encryptedSymmetricKey = vaults.encryptSymmetricKey({
      symmetricKey,
      secretKey: masterUnlockKey,
    });

    expect(
      await vaults.decryptSymmetricKey({
        encryptedSymmetricKey: encryptedSymmetricKey.key,
        secretKey: masterUnlockKey,
        iv: encryptedSymmetricKey.iv,
        tag: encryptedSymmetricKey.tag,
        tagLength: encryptedSymmetricKey.tagLength,
      }),
    ).toStrictEqual(symmetricKey);

    expect(
      forge.pki.privateKeyToPem(
        vaults.decryptPrivateKey(encryptedPrivateKey.key, symmetricKey),
      ),
    ).toStrictEqual(forge.pki.privateKeyToPem(privateKey));

    expect(
      vaults.decryptVaultKey(encryptedVaultKey.key, privateKey),
    ).toStrictEqual(vaultKey);
  });
});
