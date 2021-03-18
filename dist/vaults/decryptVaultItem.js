"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptItemDetails = exports.decryptItemOverview = exports.decryptVaultItem = exports.Options = exports.retrieveBufferFromBase64 = void 0;
const forge = require("node-forge");
const retrieveBufferFromBase64 = (base64Value) => forge.util.createBuffer(forge.util.decode64(base64Value));
exports.retrieveBufferFromBase64 = retrieveBufferFromBase64;
class Options {
}
exports.Options = Options;
const decryptVaultItem = (options) => {
    const { encData, vaultKey } = options;
    const key = forge.util.createBuffer(vaultKey);
    const decipher = forge.cipher.createDecipher('AES-GCM', key);
    decipher.start({
        iv: forge.util.hexToBytes(encData.iv),
        tagLength: encData.tagLength,
        tag: exports.retrieveBufferFromBase64(encData.tag),
    });
    decipher.update(exports.retrieveBufferFromBase64(encData.data));
    const pass = decipher.finish();
    if (pass) {
        const decryptedVaultItem = JSON.parse(decipher.output.getBytes());
        return Promise.resolve(decryptedVaultItem);
    }
    return Promise.reject(new Error(`Fail to decrypt vault item`));
};
exports.decryptVaultItem = decryptVaultItem;
const decryptItemOverview = async ({ overview, vaultKey }) => {
    return exports.decryptVaultItem({ encData: overview, vaultKey });
};
exports.decryptItemOverview = decryptItemOverview;
const decryptItemDetails = async ({ details, vaultKey }) => {
    return exports.decryptVaultItem({ encData: details, vaultKey });
};
exports.decryptItemDetails = decryptItemDetails;
exports.default = exports.decryptVaultItem;
//# sourceMappingURL=decryptVaultItem.js.map