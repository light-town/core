export declare const deriveMasterUnlockKey: (accountKey: string, normalizedMasterPassword: string, salt: string) => {
    key: string;
    iterations: number;
    salt: string;
};
export default deriveMasterUnlockKey;
