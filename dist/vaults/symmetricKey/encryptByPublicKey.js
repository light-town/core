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
exports.encryptByPublicKey = exports.EncryptedSymmetricKey = void 0;
const encrypt_1 = require("../../common/rsa/encrypt");
class EncryptedSymmetricKey {
}
exports.EncryptedSymmetricKey = EncryptedSymmetricKey;
const encryptByPublicKey = (symmetricKey, publicKey) => __awaiter(void 0, void 0, void 0, function* () {
    const encryptedSymmetricKey = yield encrypt_1.default(symmetricKey, publicKey);
    return Promise.resolve({
        kty: encryptedSymmetricKey.kty,
        alg: encryptedSymmetricKey.alg,
        key: encryptedSymmetricKey.data,
    });
});
exports.encryptByPublicKey = encryptByPublicKey;
exports.default = exports.encryptByPublicKey;
//# sourceMappingURL=encryptByPublicKey.js.map