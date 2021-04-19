import { MasterUnlockKey } from '../../encryption/common/derive-master-unlock-key';
import { EncryptedPrimaryKeySet, DecryptedPrimaryKeySet } from './definitions';
export default function decryptPrimaryKeySetHelper(encKeySet: EncryptedPrimaryKeySet, muk: MasterUnlockKey): Promise<DecryptedPrimaryKeySet>;
