export interface Options {
    versionCode: string;
    secret: string;
}
export declare const toFormatKey: (key: string) => string;
export declare const generateAccountKey: (options: Options) => string;
export default generateAccountKey;
