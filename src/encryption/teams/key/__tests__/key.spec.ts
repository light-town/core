import common from '../../../common';
import key from '../index';

describe('[Teams] [Key] ...', () => {
  it('should encrypt and decrypt team key by public/private keys of primary key set', async () => {
    const { publicKey, privateKey } = await common.rsa.generateKeyPair();
    const teamKey = common.generateCryptoRandomString(32);

    const encryptTeamKey = await key.encryptByPublicKey(teamKey, publicKey);
    expect(encryptTeamKey.kty).toStrictEqual('RSA');
    expect(encryptTeamKey.alg).toStrictEqual('RSA-OAEP-256');
    expect(encryptTeamKey.key).toBeDefined();

    const decryptedTeamKey = await key.decryptByPrivateKey(
      encryptTeamKey,
      privateKey,
    );

    expect(decryptedTeamKey).toStrictEqual(teamKey);
  });

  it('should encrypt and decrypt team key by secret key', async () => {
    const secretKey = common.generateCryptoRandomString(32);
    const teamKey = common.generateCryptoRandomString(32);

    const encryptTeamKey = await key.encryptBySecretKey(teamKey, secretKey);
    expect(encryptTeamKey.kty).toStrictEqual('AES');
    expect(encryptTeamKey.alg).toStrictEqual('AES-GCM-256');
    expect(encryptTeamKey.key).toBeDefined();

    const decryptedTeamKey = await key.decryptBySecretKey(
      encryptTeamKey,
      secretKey,
    );

    expect(decryptedTeamKey).toStrictEqual(teamKey);
  });
});
