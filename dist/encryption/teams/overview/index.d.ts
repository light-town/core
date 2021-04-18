import decryptByTeamKey from './decryptByTeamKey';
declare const _default: {
    encryptByTeamKey: (overview: Record<string, any>, teamKey: string) => Promise<import("../../common/aes/definitions").EncryptedData>;
    decryptByTeamKey: typeof decryptByTeamKey;
};
export default _default;
