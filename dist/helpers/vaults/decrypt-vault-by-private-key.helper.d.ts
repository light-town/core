import { PrivateKey } from '../../encryption/common/rsa/definitions';
import { EncryptedVault, DecryptedVault } from './definitions';
export default function decryptVaultByPrivateKeyHelper(encVault: EncryptedVault, privateKey: PrivateKey): Promise<DecryptedVault>;
