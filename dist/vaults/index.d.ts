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
import { publicKeyToString } from './publicKeyToString';
import { publicKeyFromString } from './publicKeyFromString';
import { encryptVaultMetadata } from './encryptVaultMetadata';
import { decryptVaultMetadata } from './decryptVaultMetadata';
export { decryptPrivateKey, decryptSymmetricKey, decryptVaultItem, decryptVaultKey, encryptPrivateKey, encryptSymmetricKey, encryptVaultItem, encryptVaultKey, generateKeyPair, publicKeyToString, publicKeyFromString, encryptVaultMetadata, decryptVaultMetadata, };
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
    publicKeyToString: (publicKey: import("node-forge").pki.rsa.PublicKey) => string;
    publicKeyFromString: (pem: string) => import("node-forge").pki.rsa.PublicKey;
    encryptVaultMetadata: (vaultKey: string, metadata: Record<string, any>) => Promise<import("./encrypt").EncryptedData>;
    decryptVaultMetadata: (vaultKey: string, metadata: import("./encrypt").EncryptedData) => Promise<Record<string, any>>;
};
export default _default;
