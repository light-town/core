import { MasterUnlockKey } from '../../encryption/common/derive-master-unlock-key';
import { EncryptedPrimaryKeySet } from './definitions';
export default function createPrimaryKeySetHelper(masterUnlockKey: MasterUnlockKey): Promise<EncryptedPrimaryKeySet>;
