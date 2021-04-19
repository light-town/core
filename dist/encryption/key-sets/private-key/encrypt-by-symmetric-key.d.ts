import { EncryptedPrivateKeyBySymmetricKey } from './definitions';
import { PrivateKey } from '../../common/rsa/definitions';
export default function encryptBySymmetricKey(privateKey: PrivateKey, symmetricKey: string): Promise<EncryptedPrivateKeyBySymmetricKey>;
