import generateCryptoRandomString from './generate-crypto-random-string';
import generateAccountKey from './generate-account-key';
import generateRandomSalt from './generate-random-salt';
import normalizeMasterPassword from './normalize-master-password';
import deriveMasterUnlockKey, { MasterUnlockKey } from './derive-master-unlock-key';
import pbkdf2 from './pbkdf2';
import hkdf from './hkdf';
import base64 from './base64';
import utf8 from './utf-8';
import rsa from './rsa';
export { hkdf, pbkdf2, base64, utf8, rsa, generateAccountKey, generateCryptoRandomString, generateRandomSalt, normalizeMasterPassword, deriveMasterUnlockKey, MasterUnlockKey, };
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
    utf8: {
        encode: typeof import("./utf-8/encode").default;
        decode: typeof import("./utf-8/decode").default;
    };
    rsa: {
        definitions: typeof import("./rsa/definitions");
        encrypt: typeof import("./rsa/encrypt").default;
        decrypt: typeof import("./rsa/decrypt").default;
        generateKeyPair: typeof import("./rsa/generate-key-pair").default;
        publicKeyFromString: typeof import("./rsa/public-key-from-string").default;
        publicKeyToString: typeof import("./rsa/public-key-to-string").default;
    };
    generateAccountKey: typeof generateAccountKey;
    generateCryptoRandomString: (length: number) => string;
    generateRandomSalt: (length: number) => string;
    normalizeMasterPassword: (password: string) => string;
    deriveMasterUnlockKey: typeof deriveMasterUnlockKey;
    MasterUnlockKey: typeof MasterUnlockKey;
};
export default _default;
