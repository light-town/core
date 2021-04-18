import { EncryptedVault, DecryptedVault } from './definitions';
export default function decryptVaultBySecretKeyHelper(encVault: EncryptedVault, secretKey: string): Promise<DecryptedVault>;
