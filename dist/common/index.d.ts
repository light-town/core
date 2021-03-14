import { genCryptoRandomString } from './genCryptoRandomString';
import { genAccountKey } from './genAccountKey';
import { genSalt } from './genSalt';
export { genAccountKey, genCryptoRandomString, genSalt };
declare const _default: {
    genAccountKey: ({ versionCode, userId }: import("./genAccountKey").Options) => string;
    genCryptoRandomString: (length: number) => string;
    genSalt: () => string;
};
export default _default;
