import { PublicKey } from '../../encryption/common/rsa/definitions';
import { VaultOverview, EncryptedVault } from './definitions';
export default function createVaultHelper(overview: VaultOverview, publicKey: PublicKey): Promise<EncryptedVault>;
