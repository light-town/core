import { generateCryptoRandomString } from './generateCryptoRandomString';
import { generateAccountKey } from './generateAccountKey';
import { generateRandomSalt } from './generateRandomSalt';
export { generateAccountKey, generateCryptoRandomString, generateRandomSalt };
declare const _default: {
    generateAccountKey: (options: import("./generateAccountKey").Options) => string;
    generateCryptoRandomString: (length: number) => string;
    generateRandomSalt: (length: number) => string;
};
export default _default;
