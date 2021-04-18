import { PrivateKey } from '../../encryption/common/rsa/definitions';
import { DecryptedKeySet, EncryptedKeySet } from './definitions';
export default function decryptKeySetHelper(encKeySet: EncryptedKeySet, privateKey: PrivateKey): Promise<DecryptedKeySet>;
