/// <reference types="node-forge" />
import { encryptBySecretKey } from './encryptBySecretKey';
import { decryptBySecretKey } from './decryptBySecretKey';
import { encryptByPublicKey } from './encryptByPublicKey';
import { decryptByPrivateKey } from './decryptByPrivateKey';
export { encryptBySecretKey, decryptBySecretKey, encryptByPublicKey, decryptByPrivateKey, };
declare const _default: {
    encryptBySecretKey: (vaultKey: string, secretKey: string) => Promise<import("./encryptBySecretKey").EncryptedVaultKey>;
    decryptBySecretKey: (encryptedVaultKey: import("./encryptBySecretKey").EncryptedVaultKey, secretKey: string) => Promise<string>;
    encryptByPublicKey: (vaultKey: string, publicKey: import("node-forge").pki.rsa.PublicKey) => Promise<import("./encryptByPublicKey").EncryptedVaultKey>;
    decryptByPrivateKey: (encryptedVaultKey: import("./encryptByPublicKey").EncryptedVaultKey, privateKey: import("node-forge").pki.rsa.PrivateKey) => Promise<string>;
};
export default _default;
