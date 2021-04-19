export declare abstract class MasterUnlockKey {
    key: string;
    iterations: number;
    salt: string;
}
export declare const ITERACTIONS = 100000;
export default function deriveMasterUnlockKey(accountKey: string, normalizedMasterPassword: string, salt?: string): MasterUnlockKey;
