import { EncryptedPrivateKeyBySymmetricKey } from './definitions';
import { PrivateKey } from '../../common/rsa/definitions';
export default function decryptBySymmetricKey(encryptedPrivateKey: EncryptedPrivateKeyBySymmetricKey, symmetricKey: string): Promise<PrivateKey>;
