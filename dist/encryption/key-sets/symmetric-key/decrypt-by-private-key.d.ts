import { PrivateKey } from '../../common/rsa/definitions';
import { EncryptedSymmetricKeyByPublicKey } from './definitions';
export default function decryptByPrivateKey(encryptedSymmetricKey: EncryptedSymmetricKeyByPublicKey, privateKey: PrivateKey): Promise<string>;
