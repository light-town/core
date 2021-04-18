import { PublicKey } from '../../common/rsa/definitions';
import { EncryptedSymmetricKeyByPublicKey } from './definitions';
export default function encryptByPublicKey(symmetricKey: string, publicKey: PublicKey): Promise<EncryptedSymmetricKeyByPublicKey>;
