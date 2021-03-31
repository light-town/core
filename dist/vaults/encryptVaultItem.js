"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const encryptVaultItem = ({ details, overview, vaultKey }) => __awaiter(void 0, void 0, void 0, function* () {
    const encDetails = yield exports.encryptContent({ content: details, vaultKey });
    const encOverview = yield exports.encryptContent({ content: overview, vaultKey });
    return {
        encDetails,
        encOverview,
    };
});
exports.encryptVaultItem = encryptVaultItem;
exports.default = exports.encryptVaultItem;
//# sourceMappingURL=encryptVaultItem.js.map