import deriveMasterUnlockKey, {
  MasterUnlockKey,
} from '../../encryption/common/derive-master-unlock-key';
import normalizeMasterPassword from '../../encryption/common/normalize-master-password';

export function deriveMasterUnlockKeyHelper(
  accountKey: string,
  masterPassword: string,
  salt?: string,
): MasterUnlockKey {
  return deriveMasterUnlockKey(
    accountKey,
    normalizeMasterPassword(masterPassword),
    salt,
  );
}

export default {
  deriveMasterUnlockKeyHelper,
};
