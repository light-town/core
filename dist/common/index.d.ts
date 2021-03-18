import { generateCryptoRandomString } from './generateCryptoRandomString';
import { generateAccountKey } from './generateAccountKey';
import { generateSalt } from './generateSalt';
export { generateAccountKey, generateCryptoRandomString, generateSalt };
declare const _default: {
    generateAccountKey: ({ versionCode, userId }: import("./generateAccountKey").Options) => string;
    generateCryptoRandomString: (length: number) => string;
    generateSalt: () => string;
};
export default _default;
