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
const forge = require("node-forge");
const base64_1 = require("../../common/base64");
function decryptByPrivateKey(encryptedTeamKey, privateKey) {
    return __awaiter(this, void 0, void 0, function* () {
        return Promise.resolve(privateKey.decrypt(base64_1.default.decode(encryptedTeamKey.key), 'RSA-OAEP', {
            md: forge.md.sha256.create(),
        }));
    });
}
exports.default = decryptByPrivateKey;
//# sourceMappingURL=decrypt-by-private-key.js.map