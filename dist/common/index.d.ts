import { genCryptoRandomString } from './genCryptoRandomString';
import { genAccountId } from './genAccountId';
import { genSalt } from './genSalt';
export { genAccountId, genCryptoRandomString, genSalt };
declare const _default: {
    genAccountId: ({ versionCode, userId }: import("./genAccountId").Options) => string;
    genCryptoRandomString: (length: number) => string;
    genSalt: () => string;
};
export default _default;
