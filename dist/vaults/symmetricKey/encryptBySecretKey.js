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
exports.encryptBySecretKey = exports.EncryptedSymmetricKey = void 0;
const encrypt_1 = require("../../common/aes/encrypt");
class EncryptedSymmetricKey {
}
exports.EncryptedSymmetricKey = EncryptedSymmetricKey;
const encryptBySecretKey = (symmetricKey, secretKey, salt) => __awaiter(void 0, void 0, void 0, function* () {
    const encryptedSymmetricKey = yield encrypt_1.default(symmetricKey, secretKey);
    return Promise.resolve({
        kty: encryptedSymmetricKey.kty,
        alg: encryptedSymmetricKey.alg,
        tagLength: encryptedSymmetricKey.tagLength,
        tag: encryptedSymmetricKey.tag,
        key: encryptedSymmetricKey.data,
        iv: encryptedSymmetricKey.iv,
        salt,
    });
});
exports.encryptBySecretKey = encryptBySecretKey;
exports.default = exports.encryptBySecretKey;
//# sourceMappingURL=encryptBySecretKey.js.map