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
const aes_1 = require("../../common/aes");
function encryptBySecretKey(symmetricKey, secretKey, salt) {
    return __awaiter(this, void 0, void 0, function* () {
        const encryptedSymmetricKey = yield aes_1.default.encrypt(symmetricKey, secretKey);
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
}
exports.default = encryptBySecretKey;
//# sourceMappingURL=encryptBySecretKey.js.map