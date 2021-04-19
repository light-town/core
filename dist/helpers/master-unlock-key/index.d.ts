import { MasterUnlockKey } from '../../encryption/common/derive-master-unlock-key';
export declare function deriveMasterUnlockKeyHelper(accountKey: string, masterPassword: string, salt?: string): MasterUnlockKey;
declare const _default: {
    deriveMasterUnlockKeyHelper: typeof deriveMasterUnlockKeyHelper;
};
export default _default;
