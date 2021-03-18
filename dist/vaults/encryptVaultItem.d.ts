export declare const encryptContent: ({ content, vaultKey }: {
    content: any;
    vaultKey: any;
}) => {
    tag: string;
    data: string;
    tagLength: number;
    iv: string;
};
export declare const encryptVaultItem: ({ details, overview, vaultKey }: {
    details: any;
    overview: any;
    vaultKey: any;
}) => Promise<{
    encDetails: {
        tag: string;
        data: string;
        tagLength: number;
        iv: string;
    };
    encOverview: {
        tag: string;
        data: string;
        tagLength: number;
        iv: string;
    };
}>;
export default encryptVaultItem;
