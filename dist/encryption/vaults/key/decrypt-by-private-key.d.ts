import { EncryptedVaultKeyByPublicKey } from './definitions';
import { PrivateKey } from '../../common/rsa/definitions';
export default function decryptByPrivateKey(encryptedVaultKey: EncryptedVaultKeyByPublicKey, privateKey: PrivateKey): Promise<string>;
