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
function encryptBySecretKey(teamKey, secretKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const encryptedTeamKey = yield aes_1.default.encrypt(teamKey, secretKey);
        return Promise.resolve({
            kty: encryptedTeamKey.kty,
            alg: encryptedTeamKey.alg,
            tagLength: encryptedTeamKey.tagLength,
            tag: encryptedTeamKey.tag,
            key: encryptedTeamKey.data,
            iv: encryptedTeamKey.iv,
        });
    });
}
exports.default = encryptBySecretKey;
//# sourceMappingURL=encrypt-by-secret-key.js.map