import { MasterUnlockKey } from '../../encryption/common/deriveMasterUnlockKey';
export declare function deriveMasterUnlockKeyHelper(accountKey: string, masterPassword: string, salt?: string): MasterUnlockKey;
declare const _default: {
    deriveMasterUnlockKeyHelper: typeof deriveMasterUnlockKeyHelper;
};
export default _default;
