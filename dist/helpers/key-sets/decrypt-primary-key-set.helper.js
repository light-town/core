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
const encryption_1 = require("../../encryption");
function decryptPrimaryKeySetHelper(encKeySet, muk) {
    return __awaiter(this, void 0, void 0, function* () {
        const symmetricKey = yield encryption_1.default.keySets.symmetricKey.decryptBySecretKey(encKeySet.encSymmetricKey, muk.key);
        const privateKey = yield encryption_1.default.keySets.privateKey.decryptBySymmetricKey(encKeySet.encPrivateKey, symmetricKey);
        const result = Object.assign(Object.assign({}, encKeySet), { privateKey,
            symmetricKey, publicKey: encryption_1.default.common.rsa.publicKeyFromString(encKeySet.publicKey) });
        delete result.encPrivateKey;
        delete result.encSymmetricKey;
        return result;
    });
}
exports.default = decryptPrimaryKeySetHelper;
//# sourceMappingURL=decrypt-primary-key-set.helper.js.map