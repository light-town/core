declare const _default: {
    privateKey: {
        definitions: typeof import("./privateKey/definitions");
        encryptBySymmetricKey: typeof import("./privateKey/encryptBySymmetricKey").default;
        decryptBySymmetricKey: typeof import("./privateKey/decryptBySymmetricKey").default;
    };
    symmetricKey: {
        definitions: typeof import("./symmetricKey/definitions");
        encryptByPublicKey: typeof import("./symmetricKey/encryptByPublicKey").default;
        decryptByPrivateKey: typeof import("./symmetricKey/decryptByPrivateKey").default;
        encryptBySecretKey: typeof import("./symmetricKey/encryptBySecretKey").default;
        decryptBySecretKey: typeof import("./symmetricKey/decryptBySecretKey").default;
    };
};
export default _default;
