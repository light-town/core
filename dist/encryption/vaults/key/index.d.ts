import * as definitions from './definitions';
import decryptBySecretKey from './decryptBySecretKey';
import encryptByPublicKey from './encryptByPublicKey';
import decryptByPrivateKey from './decryptByPrivateKey';
declare const _default: {
    definitions: typeof definitions;
    encryptBySecretKey: (vaultKey: string, secretKey: string) => Promise<definitions.EncryptedVaultKeyBySecretKey>;
    decryptBySecretKey: typeof decryptBySecretKey;
    encryptByPublicKey: typeof encryptByPublicKey;
    decryptByPrivateKey: typeof decryptByPrivateKey;
};
export default _default;
