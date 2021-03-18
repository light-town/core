import { generateCryptoRandomString } from './generateCryptoRandomString';
import { generateAccountKey } from './generateAccountKey';
import { generateRandomSalt } from './generateRandomSalt';
import pbkdf2 from './pbkdf2';
import hkdf from './hkdf';
export { hkdf, pbkdf2, generateAccountKey, generateCryptoRandomString, generateRandomSalt, };
declare const _default: {
    hkdf: {
        computeHKDF: ({ uint8MasterSecret, uint8Salt }: {
            uint8MasterSecret: any;
            uint8Salt: any;
        }) => Promise<Uint8Array>;
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
