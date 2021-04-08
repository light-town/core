/// <reference types="node-forge" />
import { encryptBySecretKey } from './encryptBySecretKey';
import { decryptBySecretKey } from './decryptBySecretKey';
import { encryptByPublicKey } from './encryptByPublicKey';
import { decryptByPrivateKey } from './decryptByPrivateKey';
export { encryptBySecretKey, decryptBySecretKey, encryptByPublicKey, decryptByPrivateKey, };
declare const _default: {
    encryptBySecretKey: (symmetricKey: string, secretKey: string, salt: string) => Promise<import("./encryptBySecretKey").EncryptedSymmetricKey>;
    decryptBySecretKey: (encryptedSymmetricKey: import("./encryptBySecretKey").EncryptedSymmetricKey, secretKey: string) => Promise<string>;
    encryptByPublicKey: (symmetricKey: string, publicKey: import("node-forge").pki.rsa.PublicKey) => Promise<import("./encryptByPublicKey").EncryptedSymmetricKey>;
    decryptByPrivateKey: (encryptedSymmetricKey: import("./encryptByPublicKey").EncryptedSymmetricKey, privateKey: import("node-forge").pki.rsa.PrivateKey) => Promise<string>;
};
export default _default;
