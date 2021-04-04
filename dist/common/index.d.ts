import generateCryptoRandomString from './generateCryptoRandomString';
import generateAccountKey from './generateAccountKey';
import generateRandomSalt from './generateRandomSalt';
import normalizeMasterPassword from './normalizeMasterPassword';
import deriveMasterUnlockKey from './deriveMasterUnlockKey';
import pbkdf2 from './pbkdf2';
import hkdf from './hkdf';
export { hkdf, pbkdf2, generateAccountKey, generateCryptoRandomString, generateRandomSalt, normalizeMasterPassword, deriveMasterUnlockKey, };
declare const _default: {
    hkdf: {
        computeHKDF: ({ secret, salt }: {
            secret: any;
            salt: any;
        }) => string;
    };
    pbkdf2: {
        computeHash: ({ secretKey, salt, iterations }: {
            secretKey: any;
            salt: any;
            iterations: any;
        }) => Uint8Array;
    };
    generateAccountKey: (options: import("./generateAccountKey").Options) => string;
    generateCryptoRandomString: (length: number) => string;
    generateRandomSalt: (length: number) => string;
    normalizeMasterPassword: (password: string) => string;
    deriveMasterUnlockKey: (accountKey: string, normalizedMasterPassword: string, salt: string) => {
        key: string;
        iterations: number;
        salt: string;
    };
};
export default _default;
