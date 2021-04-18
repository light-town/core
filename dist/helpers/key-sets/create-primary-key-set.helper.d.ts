import { MasterUnlockKey } from '../../encryption/common/deriveMasterUnlockKey';
import { EncryptedPrimaryKeySet } from './definitions';
export default function createPrimaryKeySetHelper(masterUnlockKey: MasterUnlockKey): Promise<EncryptedPrimaryKeySet>;
