import * as forge from 'node-forge';
export declare const encryptPrivateKey: (privateKey: forge.pki.PrivateKey, symmetricKey: string) => {
    enc: string;
    key: string;
};
