declare const _default: {
    privateKey: {
        definitions: typeof import("./private-key/definitions");
        encryptBySymmetricKey: typeof import("./private-key/encrypt-by-symmetric-key").default;
        decryptBySymmetricKey: typeof import("./private-key/decrypt-by-symmetric-key").default;
    };
    symmetricKey: {
        definitions: typeof import("./symmetric-key/definitions");
        encryptByPublicKey: typeof import("./symmetric-key/encrypt-by-public-key").default;
        decryptByPrivateKey: typeof import("./symmetric-key/decrypt-by-private-key").default;
        encryptBySecretKey: typeof import("./symmetric-key/encrypt-by-secret-key").default;
        decryptBySecretKey: typeof import("./symmetric-key/decrypt-by-secret-key").default;
    };
};
export default _default;
