"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptVaultItem = exports.encryptContent = void 0;
const forge = require("node-forge");
const common_1 = require("../common");
const encryptContent = ({ content, vaultKey }) => {
    const iv = common_1.generateRandomSalt(12);
    const tagLength = 128;
    const cipher = forge.cipher.createCipher('AES-GCM', forge.util.createBuffer(vaultKey));
    cipher.start({
        iv,
        tagLength,
    });
    cipher.update(forge.util.createBuffer(JSON.stringify(content)));
    cipher.finish();
    const encryptedContent = {
        tag: forge.util.encode64(cipher.mode.tag.getBytes()),
        data: forge.util.encode64(cipher.output.getBytes()),
        tagLength,
        iv: forge.util.bytesToHex(iv),
    };
    return encryptedContent;
};
exports.encryptContent = encryptContent;
const encryptVaultItem = async ({ details, overview, vaultKey }) => {
    const encDetails = await exports.encryptContent({ content: details, vaultKey });
    const encOverview = await exports.encryptContent({ content: overview, vaultKey });
    return {
        encDetails,
        encOverview,
    };
};
exports.encryptVaultItem = encryptVaultItem;
exports.default = exports.encryptVaultItem;
//# sourceMappingURL=encryptVaultItem.js.map