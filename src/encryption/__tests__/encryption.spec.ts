import * as forge from 'node-forge';
import common from '../common';
import encryption from '../index';
import * as faker from 'faker';

describe('[Vaults] ...', () => {
  it('should generate Master Unlock Key and Vault Key and encrypt them', async () => {
    const masterPassword = faker.random.word();
    const normalizedMasterPassword = common.normalizeMasterPassword(
      masterPassword,
    );

    const accountKey = common.generateAccountKey(
      'A3',
      common.generateCryptoRandomString(32),
    );

    const {
      key: masterUnlockKey,
      salt: masterUnlockSalt,
    } = common.deriveMasterUnlockKey(accountKey, normalizedMasterPassword);

    const symmetricKey = common.generateCryptoRandomString(32);
    const vaultKey = common.generateCryptoRandomString(32);
    const {
      publicKey,
      privateKey,
    } = await encryption.common.rsa.generateKeyPair();
    const encryptedVaultKey = await encryption.vaults.key.encryptByPublicKey(
      vaultKey,
      publicKey,
    );
    const encryptedPrivateKey = await encryption.keySets.privateKey.encryptBySymmetricKey(
      privateKey,
      symmetricKey,
    );
    const encryptedSymmetricKey = await encryption.keySets.symmetricKey.encryptBySecretKey(
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
      await encryption.keySets.symmetricKey.decryptBySecretKey(
        encryptedSymmetricKey,
        masterUnlockKey,
      ),
    ).toStrictEqual(symmetricKey);

    expect(
      forge.pki.privateKeyToPem(
        await encryption.keySets.privateKey.decryptBySymmetricKey(
          encryptedPrivateKey,
          symmetricKey,
        ),
      ),
    ).toStrictEqual(forge.pki.privateKeyToPem(privateKey));

    expect(
      await encryption.vaults.key.decryptByPrivateKey(
        encryptedVaultKey,
        privateKey,
      ),
    ).toStrictEqual(vaultKey);
  });
});
