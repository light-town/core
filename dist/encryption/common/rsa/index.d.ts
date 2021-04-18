import * as definitions from './definitions';
import encrypt from './encrypt';
import decrypt from './decrypt';
import generateKeyPair from './generateKeyPair';
import publicKeyFromString from './publicKeyFromString';
import publicKeyToString from './publicKeyToString';
declare const _default: {
    definitions: typeof definitions;
    encrypt: typeof encrypt;
    decrypt: typeof decrypt;
    generateKeyPair: typeof generateKeyPair;
    publicKeyFromString: typeof publicKeyFromString;
    publicKeyToString: typeof publicKeyToString;
};
export default _default;
