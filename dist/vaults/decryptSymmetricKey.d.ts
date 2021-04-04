import * as forge from 'node-forge';
export declare class Options {
    encryptedSymmetricKey: string;
    secretKey: string;
    iv: string;
    tag: string;
    tagLength: number;
}
export declare const retrieveBufferFromBase64: (base64Value: any) => forge.util.ByteStringBuffer;
export declare const decryptSymmetricKey: (options: Options) => Promise<string>;
