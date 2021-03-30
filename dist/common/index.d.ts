import { generateCryptoRandomString } from './generateCryptoRandomString';
import { generateAccountKey } from './generateAccountKey';
import { generateRandomSalt } from './generateRandomSalt';
import pbkdf2 from './pbkdf2';
import hkdf from './hkdf';
export { hkdf, pbkdf2, generateAccountKey, generateCryptoRandomString, generateRandomSalt, };
declare const _default: {
    hkdf: {
        computeHKDF: ({ secret, salt }: {
            secret: any;
            salt: any;
        }) => string;
    };
    pbkdf2: {
        computeHash: ({ uint8MasterPassword, encryptionKeySalt, iterations, }: {
            uint8MasterPassword: any;
            encryptionKeySalt: any;
            iterations?: number;
        }) => Uint8Array;
    };
    generateAccountKey: (options: import("./generateAccountKey").Options) => string;
    generateCryptoRandomString: (length: number) => string;
    generateRandomSalt: (length: number) => string;
};
export default _default;
