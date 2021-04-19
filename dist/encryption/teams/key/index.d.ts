import * as definitions from './definitions';
import encryptBySecretKey from './encrypt-by-secret-key';
import decryptBySecretKey from './decrypt-by-secret-key';
import encryptByPublicKey from './encrypt-by-public-key';
import decryptByPrivateKey from './decrypt-by-private-key';
declare const _default: {
    definitions: typeof definitions;
    encryptBySecretKey: typeof encryptBySecretKey;
    decryptBySecretKey: typeof decryptBySecretKey;
    encryptByPublicKey: typeof encryptByPublicKey;
    decryptByPrivateKey: typeof decryptByPrivateKey;
};
export default _default;
