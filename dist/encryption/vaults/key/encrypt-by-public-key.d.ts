import { PublicKey } from '../../common/rsa/definitions';
import { EncryptedVaultKeyByPublicKey } from './definitions';
export default function encryptByPublicKey(vaultKey: string, publicKey: PublicKey): Promise<EncryptedVaultKeyByPublicKey>;
