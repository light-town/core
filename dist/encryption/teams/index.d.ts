import key from './key';
import overview from './overview';
export { key, overview };
declare const _default: {
    key: {
        definitions: typeof import("./key/definitions");
        encryptBySecretKey: typeof import("./key/encrypt-by-secret-key").default;
        decryptBySecretKey: typeof import("./key/decrypt-by-secret-key").default;
        encryptByPublicKey: typeof import("./key/encrypt-by-public-key").default;
        decryptByPrivateKey: typeof import("./key/decrypt-by-private-key").default;
    };
    overview: {
        encryptByTeamKey: (overview: Record<string, any>, teamKey: string) => Promise<import("../common/aes/definitions").EncryptedData>;
        decryptByTeamKey: typeof import("./overview/decrypt-by-team-key").default;
    };
};
export default _default;
