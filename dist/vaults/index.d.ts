/// <reference types="node-forge" />
import { decryptPrivateKey } from './decryptPrivateKey';
import { decryptSymmetricKey } from './decryptSymmetricKey';
import { decryptVaultItem } from './decryptVaultItem';
import { decryptVaultKey } from './decryptVaultKey';
import { encryptPrivateKey } from './encryptPrivateKey';
import { encryptSymmetricKey } from './encryptSymmetricKey';
import { encryptVaultItem } from './encryptVaultItem';
import { encryptVaultKey } from './encryptVaultKey';
import { generateKeyPair } from './generateKeyPair';
export { decryptPrivateKey, decryptSymmetricKey, decryptVaultItem, decryptVaultKey, encryptPrivateKey, encryptSymmetricKey, encryptVaultItem, encryptVaultKey, generateKeyPair, };
declare const _default: {
    decryptPrivateKey: (encryptedPrivateKey: string, symmetricKey: string) => import("node-forge").pki.rsa.PrivateKey;
    decryptSymmetricKey: (options: import("./decryptSymmetricKey").Options) => Promise<string>;
    decryptVaultItem: (options: import("./decryptVaultItem").Options) => Promise<any>;
    decryptVaultKey: (encryptedVaultKey: string, privateKey: import("node-forge").pki.rsa.PrivateKey) => string;
    encryptPrivateKey: (privateKey: import("node-forge").pki.PrivateKey, symmetricKey: string) => {
        kty: string;
        alg: string;
        key: string;
    };
    encryptSymmetricKey: (options: import("./encryptSymmetricKey").Options) => import("./encryptSymmetricKey").EncryptedSymmetricKey;
    encryptVaultItem: ({ details, overview, vaultKey }: {
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
    encryptVaultKey: (vaultKey: string, publicKey: import("node-forge").pki.rsa.PublicKey) => import("./encryptVaultKey").EncryptedVaultKey;
    generateKeyPair: () => Promise<import("node-forge").pki.rsa.KeyPair>;
};
export default _default;
