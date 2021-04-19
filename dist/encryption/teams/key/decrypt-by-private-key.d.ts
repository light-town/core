import * as forge from 'node-forge';
import { EncryptedTeamKeyByPublicKey } from './definitions';
export default function decryptByPrivateKey(encryptedTeamKey: EncryptedTeamKeyByPublicKey, privateKey: forge.pki.rsa.PrivateKey): Promise<string>;
