import * as definitions from './definitions';
import encrypt from './encrypt';
import decrypt from './decrypt';
import generateKeyPair from './generate-key-pair';
import publicKeyFromString from './public-key-from-string';
import publicKeyToString from './public-key-to-string';
declare const _default: {
    definitions: typeof definitions;
    encrypt: typeof encrypt;
    decrypt: typeof decrypt;
    generateKeyPair: typeof generateKeyPair;
    publicKeyFromString: typeof publicKeyFromString;
    publicKeyToString: typeof publicKeyToString;
};
export default _default;
