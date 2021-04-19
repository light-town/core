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
exports.encryptBySecretKey = void 0;
const aes_1 = require("../../common/aes");
const encryptBySecretKey = (vaultKey, secretKey) => __awaiter(void 0, void 0, void 0, function* () {
    const encryptedVaultKey = yield aes_1.default.encrypt(vaultKey, secretKey);
    return Promise.resolve({
        kty: encryptedVaultKey.kty,
        alg: encryptedVaultKey.alg,
        tagLength: encryptedVaultKey.tagLength,
        tag: encryptedVaultKey.tag,
        key: encryptedVaultKey.data,
        iv: encryptedVaultKey.iv,
    });
});
exports.encryptBySecretKey = encryptBySecretKey;
exports.default = exports.encryptBySecretKey;
//# sourceMappingURL=encrypt-by-secret-key.js.map