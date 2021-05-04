import { PublicKey } from '../../encryption/common/rsa/definitions';
import { EncryptedKeySet } from './definitions';
export default function createKeySetHelper(symmetricKey: string, publicKey: PublicKey): Promise<EncryptedKeySet>;
