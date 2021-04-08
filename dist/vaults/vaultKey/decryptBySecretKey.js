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
exports.decryptBySecretKey = void 0;
const decrypt_1 = require("../../common/aes/decrypt");
const decryptBySecretKey = (encryptedVaultKey, secretKey) => __awaiter(void 0, void 0, void 0, function* () {
    return yield decrypt_1.default({
        kty: encryptedVaultKey.kty,
        alg: encryptedVaultKey.alg,
        tagLength: encryptedVaultKey.tagLength,
        tag: encryptedVaultKey.tag,
        data: encryptedVaultKey.key,
        iv: encryptedVaultKey.iv,
    }, secretKey);
});
exports.decryptBySecretKey = decryptBySecretKey;
exports.default = exports.decryptBySecretKey;
//# sourceMappingURL=decryptBySecretKey.js.map