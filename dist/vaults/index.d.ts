/// <reference types="node-forge" />
import { generateKeyPair } from './generateKeyPair';
import privateKey from './privateKey';
import symmetricKey from './symmetricKey';
import vaultKey from './vaultKey';
import vaultMetadata from './vaultMetadata';
import teamKey from './teamKey';
import teamMetadata from './teamMetadata';
import { decryptVaultItem } from './decryptVaultItem';
import { encryptVaultItem } from './encryptVaultItem';
import { publicKeyToString } from './publicKeyToString';
import { publicKeyFromString } from './publicKeyFromString';
export { privateKey, symmetricKey, vaultKey, vaultMetadata, teamKey, teamMetadata, decryptVaultItem, encryptVaultItem, generateKeyPair, publicKeyToString, publicKeyFromString, };
declare const _default: {
    privateKey: {
        encryptBySymmetricKey: (privateKey: import("node-forge").pki.PrivateKey, symmetricKey: string) => Promise<import("./privateKey/encryptBySymmetricKey").EncryptedPrivateKey>;
        decryptBySymmetricKey: (encryptedPrivateKey: import("./privateKey/encryptBySymmetricKey").EncryptedPrivateKey, symmetricKey: string) => Promise<import("node-forge").pki.rsa.PrivateKey>;
    };
    symmetricKey: {
        encryptBySecretKey: (symmetricKey: string, secretKey: string, salt: string) => Promise<import("./symmetricKey/encryptBySecretKey").EncryptedSymmetricKey>;
        decryptBySecretKey: (encryptedSymmetricKey: import("./symmetricKey/encryptBySecretKey").EncryptedSymmetricKey, secretKey: string) => Promise<string>;
        encryptByPublicKey: (symmetricKey: string, publicKey: import("node-forge").pki.rsa.PublicKey) => Promise<import("./symmetricKey/encryptByPublicKey").EncryptedSymmetricKey>;
        decryptByPrivateKey: (encryptedSymmetricKey: import("./symmetricKey/encryptByPublicKey").EncryptedSymmetricKey, privateKey: import("node-forge").pki.rsa.PrivateKey) => Promise<string>;
    };
    vaultKey: {
        encryptBySecretKey: (vaultKey: string, secretKey: string) => Promise<import("./vaultKey/encryptBySecretKey").EncryptedVaultKey>;
        decryptBySecretKey: (encryptedVaultKey: import("./vaultKey/encryptBySecretKey").EncryptedVaultKey, secretKey: string) => Promise<string>;
        encryptByPublicKey: (vaultKey: string, publicKey: import("node-forge").pki.rsa.PublicKey) => Promise<import("./vaultKey/encryptByPublicKey").EncryptedVaultKey>;
        decryptByPrivateKey: (encryptedVaultKey: import("./vaultKey/encryptByPublicKey").EncryptedVaultKey, privateKey: import("node-forge").pki.rsa.PrivateKey) => Promise<string>;
    };
    vaultMetadata: {
        encryptByVaultKey: (metadata: Record<string, any>, vaultKey: string) => Promise<import("../common/aes/encrypt").EncryptedData>;
        decryptByVaultKey: (metadata: import("../common/aes/encrypt").EncryptedData, vaultKey: string) => Promise<Record<string, any>>;
    };
    teamKey: {
        encryptBySecretKey: (teamKey: string, secretKey: string) => Promise<import("./teamKey/encryptBySecretKey").EncryptedTeamKey>;
        decryptBySecretKey: (encryptedTeamKey: import("./teamKey/encryptBySecretKey").EncryptedTeamKey, secretKey: string) => Promise<string>;
        encryptByPublicKey: (teamKey: string, publicKey: import("node-forge").pki.rsa.PublicKey) => Promise<import("./teamKey/encryptByPublicKey").EncryptedTeamKey>;
        decryptByPrivateKey: (encryptedTeamKey: import("./teamKey/encryptByPublicKey").EncryptedTeamKey, privateKey: import("node-forge").pki.rsa.PrivateKey) => Promise<string>;
    };
    teamMetadata: {
        encryptByTeamKey: (metadata: Record<string, any>, teamKey: string) => Promise<import("../common/aes/encrypt").EncryptedData>;
        decryptByTeamKey: (metadata: import("../common/aes/encrypt").EncryptedData, teamKey: string) => Promise<Record<string, any>>;
    };
    decryptVaultItem: (options: import("./decryptVaultItem").Options) => Promise<any>;
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
    generateKeyPair: () => Promise<import("node-forge").pki.rsa.KeyPair>;
    publicKeyToString: (publicKey: import("node-forge").pki.rsa.PublicKey) => string;
    publicKeyFromString: (pem: string) => import("node-forge").pki.rsa.PublicKey;
};
export default _default;
