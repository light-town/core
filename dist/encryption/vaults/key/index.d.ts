import * as definitions from './definitions';
import decryptBySecretKey from './decrypt-by-secret-key';
import encryptByPublicKey from './encrypt-by-public-key';
import decryptByPrivateKey from './decrypt-by-private-key';
declare const _default: {
    definitions: typeof definitions;
    encryptBySecretKey: (vaultKey: string, secretKey: string) => Promise<definitions.EncryptedVaultKeyBySecretKey>;
    decryptBySecretKey: typeof decryptBySecretKey;
    encryptByPublicKey: typeof encryptByPublicKey;
    decryptByPrivateKey: typeof decryptByPrivateKey;
};
export default _default;
