import * as forge from 'node-forge';
import common from '../../common';
import vaults from '../index';
import * as faker from 'faker';

describe('[Vaults] ...', () => {
  it('should encrypt and decrypt private key by symmetric key of primary key set', async () => {
    const { publicKey, privateKey } = await vaults.generateKeyPair();
    const symmetricKey = common.generateCryptoRandomString(32);

    const data = JSON.stringify({ msg: 'test' });
    const encryptedData = publicKey.encrypt(data);

    const encryptedPrivateKey = await vaults.privateKey.encryptBySymmetricKey(
      privateKey,
      symmetricKey,
    );

    expect(encryptedPrivateKey.kty).toStrictEqual('AES');
    expect(encryptedPrivateKey.alg).toStrictEqual('AES-GCM-256');
    expect(encryptedPrivateKey.key).toBeDefined();

    const decryptedPrivateKey = await vaults.privateKey.decryptBySymmetricKey(
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

    const encryptedSymmetricKey = await vaults.symmetricKey.encryptBySecretKey(
      symmetricKey,
      masterUnlockKey,
      masterUnlockSalt,
    );

    expect(encryptedSymmetricKey.kty).toStrictEqual('AES');
    expect(encryptedSymmetricKey.alg).toStrictEqual('AES-GCM-256');
    expect(encryptedSymmetricKey.iv).toBeDefined();
    expect(typeof encryptedSymmetricKey.tagLength).toStrictEqual('number');
    expect(encryptedSymmetricKey.tag).toBeDefined();

    const decryptedSymmetricKey = await vaults.symmetricKey.decryptBySecretKey(
      encryptedSymmetricKey,
      masterUnlockKey,
    );

    expect(decryptedSymmetricKey).toStrictEqual(symmetricKey);
  });

  it('should encrypt and decrypt symmetric key by public and private keys of primary key set', async () => {
    const { publicKey, privateKey } = await vaults.generateKeyPair();
    const symmetricKey = common.generateCryptoRandomString(32);

    const encryptedSymmetricKey = await vaults.symmetricKey.encryptByPublicKey(
      symmetricKey,
      publicKey,
    );

    expect(encryptedSymmetricKey).toStrictEqual({
      kty: 'RSA',
      alg: 'RSA-OAEP-256',
      key: encryptedSymmetricKey.key,
    });
    expect(encryptedSymmetricKey.key).toBeDefined();

    const decryptedSymmetricKey = await vaults.symmetricKey.decryptByPrivateKey(
      encryptedSymmetricKey,
      privateKey,
    );

    expect(decryptedSymmetricKey).toStrictEqual(symmetricKey);
  });

  it('should encrypt and decrypt vault key by public and private keys of primary key set', async () => {
    const { publicKey, privateKey } = await vaults.generateKeyPair();
    const vaultKey = common.generateCryptoRandomString(32);

    const encryptVaultKey = await vaults.vaultKey.encryptByPublicKey(
      vaultKey,
      publicKey,
    );
    expect(encryptVaultKey.kty).toStrictEqual('RSA');
    expect(encryptVaultKey.alg).toStrictEqual('RSA-OAEP-256');
    expect(encryptVaultKey.key).toBeDefined();

    const decryptedVaultKey = await vaults.vaultKey.decryptByPrivateKey(
      encryptVaultKey,
      privateKey,
    );

    expect(decryptedVaultKey).toStrictEqual(vaultKey);
  });

  it('should encrypt and decrypt vault key by secret key', async () => {
    const secretKey = common.generateCryptoRandomString(32);

    const vaultKey = common.generateCryptoRandomString(32);

    const encryptVaultKey = await vaults.vaultKey.encryptBySecretKey(
      vaultKey,
      secretKey,
    );
    expect(encryptVaultKey.kty).toStrictEqual('AES');
    expect(encryptVaultKey.alg).toStrictEqual('AES-GCM-256');
    expect(encryptVaultKey.key).toBeDefined();

    const decryptedVaultKey = await vaults.vaultKey.decryptBySecretKey(
      encryptVaultKey,
      secretKey,
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

    const {
      key: masterUnlockKey,
      salt: masterUnlockSalt,
    } = common.deriveMasterUnlockKey(accountKey, normalizedMasterPassword);

    const symmetricKey = common.generateCryptoRandomString(32);
    const vaultKey = common.generateCryptoRandomString(32);
    const { publicKey, privateKey } = await vaults.generateKeyPair();
    const encryptedVaultKey = await vaults.vaultKey.encryptByPublicKey(
      vaultKey,
      publicKey,
    );
    const encryptedPrivateKey = await vaults.privateKey.encryptBySymmetricKey(
      privateKey,
      symmetricKey,
    );
    const encryptedSymmetricKey = await vaults.symmetricKey.encryptBySecretKey(
      symmetricKey,
      masterUnlockKey,
      masterUnlockSalt,
    );

    expect(
      common.deriveMasterUnlockKey(
        accountKey,
        normalizedMasterPassword,
        encryptedSymmetricKey.salt,
      ),
    ).toStrictEqual({
      key: masterUnlockKey,
      salt: masterUnlockSalt,
      iterations: 100000,
    });

    expect(
      await vaults.symmetricKey.decryptBySecretKey(
        encryptedSymmetricKey,
        masterUnlockKey,
      ),
    ).toStrictEqual(symmetricKey);

    expect(
      forge.pki.privateKeyToPem(
        await vaults.privateKey.decryptBySymmetricKey(
          encryptedPrivateKey,
          symmetricKey,
        ),
      ),
    ).toStrictEqual(forge.pki.privateKeyToPem(privateKey));

    expect(
      await vaults.vaultKey.decryptByPrivateKey(encryptedVaultKey, privateKey),
    ).toStrictEqual(vaultKey);
  });

  it('should transform public key to pem string and vice versa', async () => {
    const { publicKey, privateKey } = await vaults.generateKeyPair();

    const pem = vaults.publicKeyToString(publicKey);

    expect(typeof pem).toStrictEqual('string');

    const data = faker.random.word();
    const encData = vaults.publicKeyFromString(pem).encrypt(data);

    expect(privateKey.decrypt(encData)).toStrictEqual(data);
  });

  it('should encrypt and decrypt vault metadata', async () => {
    const TEST_VAULT_KEY = common.generateCryptoRandomString(32);
    const TEST_METADATA = {
      title: faker.random.word(),
      description: faker.random.words(),
    };

    const encryptedData = await vaults.vaultMetadata.encryptByVaultKey(
      TEST_METADATA,
      TEST_VAULT_KEY,
    );

    const decryptedData = await vaults.vaultMetadata.decryptByVaultKey(
      encryptedData,
      TEST_VAULT_KEY,
    );

    expect(decryptedData).toStrictEqual(TEST_METADATA);
  });

  it('should encrypt and decrypt team metadata of team key', async () => {
    const TEST_TEAM_KEY = common.generateCryptoRandomString(32);
    const TEST_METADATA = {
      title: faker.random.word(),
      desc: faker.random.words(),
    };

    const encryptedData = await vaults.teamMetadata.encryptByTeamKey(
      TEST_METADATA,
      TEST_TEAM_KEY,
    );

    const decryptedData = await vaults.teamMetadata.decryptByTeamKey(
      encryptedData,
      TEST_TEAM_KEY,
    );

    expect(decryptedData).toStrictEqual(TEST_METADATA);
  });

  it('should encrypt and decrypt team key by public/private keys of primary key set', async () => {
    const { publicKey, privateKey } = await vaults.generateKeyPair();
    const teamKey = common.generateCryptoRandomString(32);

    const encryptTeamKey = await vaults.teamKey.encryptByPublicKey(
      teamKey,
      publicKey,
    );
    expect(encryptTeamKey.kty).toStrictEqual('RSA');
    expect(encryptTeamKey.alg).toStrictEqual('RSA-OAEP-256');
    expect(encryptTeamKey.key).toBeDefined();

    const decryptedTeamKey = await vaults.teamKey.decryptByPrivateKey(
      encryptTeamKey,
      privateKey,
    );

    expect(decryptedTeamKey).toStrictEqual(teamKey);
  });

  it('should encrypt and decrypt team key by secret key', async () => {
    const secretKey = common.generateCryptoRandomString(32);
    const teamKey = common.generateCryptoRandomString(32);

    const encryptTeamKey = await vaults.teamKey.encryptBySecretKey(
      teamKey,
      secretKey,
    );
    expect(encryptTeamKey.kty).toStrictEqual('AES');
    expect(encryptTeamKey.alg).toStrictEqual('AES-GCM-256');
    expect(encryptTeamKey.key).toBeDefined();

    const decryptedTeamKey = await vaults.teamKey.decryptBySecretKey(
      encryptTeamKey,
      secretKey,
    );

    expect(decryptedTeamKey).toStrictEqual(teamKey);
  });
});
