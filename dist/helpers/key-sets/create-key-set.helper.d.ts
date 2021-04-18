import { PublicKey } from '../../encryption/common/rsa/definitions';
import { EncryptedKeySet } from './definitions';
export default function createKeySetHelper(publicKey: PublicKey, symmetricKey: string): Promise<EncryptedKeySet>;
