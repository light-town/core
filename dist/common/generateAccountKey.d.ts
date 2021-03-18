export interface Options {
    versionCode: string;
    userId: string;
}
export declare const toFormatKey: (key: string) => string;
export declare const generateAccountKey: ({ versionCode, userId }: Options) => string;
