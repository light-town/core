import deriveMasterUnlockKey, {
  MasterUnlockKey,
} from '../../encryption/common/deriveMasterUnlockKey';
import normalizeMasterPassword from '../../encryption/common/normalizeMasterPassword';

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
