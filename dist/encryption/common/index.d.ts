import generateCryptoRandomString from './generateCryptoRandomString';
import generateAccountKey from './generateAccountKey';
import generateRandomSalt from './generateRandomSalt';
import normalizeMasterPassword from './normalizeMasterPassword';
import deriveMasterUnlockKey, { MasterUnlockKey } from './deriveMasterUnlockKey';
import pbkdf2 from './pbkdf2';
import hkdf from './hkdf';
import base64 from './base64';
import rsa from './rsa';
export { hkdf, pbkdf2, base64, rsa, generateAccountKey, generateCryptoRandomString, generateRandomSalt, normalizeMasterPassword, deriveMasterUnlockKey, MasterUnlockKey, };
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
    base64: {
        encode: typeof import("./base64/encode").default;
        decode: typeof import("./base64/decode").default;
    };
    rsa: {
        definitions: typeof import("./rsa/definitions");
        encrypt: typeof import("./rsa/encrypt").default;
        decrypt: typeof import("./rsa/decrypt").default;
        generateKeyPair: typeof import("./rsa/generateKeyPair").default;
        publicKeyFromString: typeof import("./rsa/publicKeyFromString").default;
        publicKeyToString: typeof import("./rsa/publicKeyToString").default;
    };
    generateAccountKey: typeof generateAccountKey;
    generateCryptoRandomString: (length: number) => string;
    generateRandomSalt: (length: number) => string;
    normalizeMasterPassword: (password: string) => string;
    deriveMasterUnlockKey: typeof deriveMasterUnlockKey;
    MasterUnlockKey: typeof MasterUnlockKey;
};
export default _default;
