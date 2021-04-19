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
const rsa_1 = require("../../common/rsa");
function decryptByPrivateKey(encryptedSymmetricKey, privateKey) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield rsa_1.default.decrypt({
            kty: encryptedSymmetricKey.kty,
            alg: encryptedSymmetricKey.alg,
            data: encryptedSymmetricKey.key,
        }, privateKey);
    });
}
exports.default = decryptByPrivateKey;
//# sourceMappingURL=decrypt-by-private-key.js.map