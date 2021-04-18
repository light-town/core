import { MasterUnlockKey } from '../../encryption/common/deriveMasterUnlockKey';
import { EncryptedPrimaryKeySet, DecryptedPrimaryKeySet } from './definitions';
export default function decryptPrimaryKeySetHelper(encKeySet: EncryptedPrimaryKeySet, muk: MasterUnlockKey): Promise<DecryptedPrimaryKeySet>;
