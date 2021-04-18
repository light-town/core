import common from '../../../common';
import key from '../index';

describe('[Vaults] [Key] ...', () => {
  it('should encrypt and decrypt vault key by public and private keys of primary key set', async () => {
    const { publicKey, privateKey } = await common.rsa.generateKeyPair();
    const vaultKey = common.generateCryptoRandomString(32);

    const encryptVaultKey = await key.encryptByPublicKey(vaultKey, publicKey);
    expect(encryptVaultKey.kty).toStrictEqual('RSA');
    expect(encryptVaultKey.alg).toStrictEqual('RSA-OAEP-256');
    expect(encryptVaultKey.key).toBeDefined();

    const decryptedVaultKey = await key.decryptByPrivateKey(
      encryptVaultKey,
      privateKey,
    );

    expect(decryptedVaultKey).toStrictEqual(vaultKey);
  });

  it('should encrypt and decrypt vault key by secret key', async () => {
    const secretKey = common.generateCryptoRandomString(32);

    const vaultKey = common.generateCryptoRandomString(32);

    const encryptVaultKey = await key.encryptBySecretKey(vaultKey, secretKey);
    expect(encryptVaultKey.kty).toStrictEqual('AES');
    expect(encryptVaultKey.alg).toStrictEqual('AES-GCM-256');
    expect(encryptVaultKey.key).toBeDefined();

    const decryptedVaultKey = await key.decryptBySecretKey(
      encryptVaultKey,
      secretKey,
    );

    expect(decryptedVaultKey).toStrictEqual(vaultKey);
  });
});
