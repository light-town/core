/// <reference types="node-forge" />
import { encryptBySecretKey } from './encryptBySecretKey';
import { decryptBySecretKey } from './decryptBySecretKey';
import { encryptByPublicKey } from './encryptByPublicKey';
import { decryptByPrivateKey } from './decryptByPrivateKey';
export { encryptBySecretKey, decryptBySecretKey, encryptByPublicKey, decryptByPrivateKey, };
declare const _default: {
    encryptBySecretKey: (teamKey: string, secretKey: string) => Promise<import("./encryptBySecretKey").EncryptedTeamKey>;
    decryptBySecretKey: (encryptedTeamKey: import("./encryptBySecretKey").EncryptedTeamKey, secretKey: string) => Promise<string>;
    encryptByPublicKey: (teamKey: string, publicKey: import("node-forge").pki.rsa.PublicKey) => Promise<import("./encryptByPublicKey").EncryptedTeamKey>;
    decryptByPrivateKey: (encryptedTeamKey: import("./encryptByPublicKey").EncryptedTeamKey, privateKey: import("node-forge").pki.rsa.PrivateKey) => Promise<string>;
};
export default _default;
