/// <reference types="node-forge" />
import { encryptBySymmetricKey } from './encryptBySymmetricKey';
import { decryptBySymmetricKey } from './decryptBySymmetricKey';
export { encryptBySymmetricKey, decryptBySymmetricKey };
declare const _default: {
    encryptBySymmetricKey: (privateKey: import("node-forge").pki.PrivateKey, symmetricKey: string) => Promise<import("./encryptBySymmetricKey").EncryptedPrivateKey>;
    decryptBySymmetricKey: (encryptedPrivateKey: import("./encryptBySymmetricKey").EncryptedPrivateKey, symmetricKey: string) => Promise<import("node-forge").pki.rsa.PrivateKey>;
};
export default _default;
