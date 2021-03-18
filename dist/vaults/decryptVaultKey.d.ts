import * as forge from 'node-forge';
export declare const decryptVaultKey: (encryptedVaultKey: string, privateKey: forge.pki.rsa.PrivateKey) => string;
