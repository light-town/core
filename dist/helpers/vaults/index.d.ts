import * as definitions from './definitions';
import createVaultHelper from './create-vault.helper';
import decryptVaultByPrivateKeyHelper from './decrypt-vault-by-private-key.helper';
import decryptVaultBySecretKeyHelper from './decrypt-vault-by-secret-key.helper';
import shareVaultHelper from './share-vault.helper';
declare const _default: {
    definitions: typeof definitions;
    decryptVaultByPrivateKeyHelper: typeof decryptVaultByPrivateKeyHelper;
    decryptVaultBySecretKeyHelper: typeof decryptVaultBySecretKeyHelper;
    createVaultHelper: typeof createVaultHelper;
    shareVaultHelper: typeof shareVaultHelper;
};
export default _default;
