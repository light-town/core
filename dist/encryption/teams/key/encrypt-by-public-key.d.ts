import { EncryptedTeamKeyByPublicKey } from './definitions';
import { PublicKey } from '../../common/rsa/definitions';
export default function encryptByPublicKey(teamKey: string, publicKey: PublicKey): Promise<EncryptedTeamKeyByPublicKey>;
