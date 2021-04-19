import * as definitions from './definitions';
import encryptVaultItem, { encryptOverviewByVaultKey, encryptDetailsByVaultKey } from './encrypt-by-vault-key';
import decryptVaultItem, { decryptOverviewByVaultKey, decryptDetailsByVaultKey } from './decrypt-by-vault-key';
declare const _default: {
    definitions: typeof definitions;
    encryptVaultItem: typeof encryptVaultItem;
    encryptOverviewByVaultKey: typeof encryptOverviewByVaultKey;
    encryptDetailsByVaultKey: typeof encryptDetailsByVaultKey;
    decryptVaultItem: typeof decryptVaultItem;
    decryptOverviewByVaultKey: typeof decryptOverviewByVaultKey;
    decryptDetailsByVaultKey: typeof decryptDetailsByVaultKey;
};
export default _default;
