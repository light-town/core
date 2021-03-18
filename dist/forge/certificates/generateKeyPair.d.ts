import * as forge from 'node-forge';
export declare const generateKeyPair: () => {
    publicKey: forge.pki.ed25519.NativeBuffer;
    privateKey: forge.pki.ed25519.NativeBuffer;
};
export default generateKeyPair;
