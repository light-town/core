import { EncryptedTeamKeyByPublicKey } from './definitions';
import { PublicKey } from '../../../encryption/common/rsa/definitions';
export default function encryptByPublicKey(teamKey: string, publicKey: PublicKey): Promise<EncryptedTeamKeyByPublicKey>;
