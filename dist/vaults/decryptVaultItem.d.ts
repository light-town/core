import * as forge from 'node-forge';
export declare const retrieveBufferFromBase64: (base64Value: any) => forge.util.ByteStringBuffer;
export declare class Options {
    encData: {
        iv: string;
        tagLength: number;
        tag: string;
        data: any;
    };
    vaultKey: string;
}
export declare const decryptVaultItem: (options: Options) => Promise<any>;
export declare const decryptItemOverview: ({ overview, vaultKey }: {
    overview: any;
    vaultKey: any;
}) => Promise<any>;
export declare const decryptItemDetails: ({ details, vaultKey }: {
    details: any;
    vaultKey: any;
}) => Promise<any>;
export default decryptVaultItem;
