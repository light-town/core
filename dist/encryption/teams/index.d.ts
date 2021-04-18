import key from './key';
import overview from './overview';
export { key, overview };
declare const _default: {
    key: {
        definitions: typeof import("./key/definitions");
        encryptBySecretKey: typeof import("./key/encryptBySecretKey").default;
        decryptBySecretKey: typeof import("./key/decryptBySecretKey").default;
        encryptByPublicKey: typeof import("./key/encryptByPublicKey").default;
        decryptByPrivateKey: typeof import("./key/decryptByPrivateKey").default;
    };
    overview: {
        encryptByTeamKey: (overview: Record<string, any>, teamKey: string) => Promise<import("../common/aes/definitions").EncryptedData>;
        decryptByTeamKey: typeof import("./overview/decryptByTeamKey").default;
    };
};
export default _default;
