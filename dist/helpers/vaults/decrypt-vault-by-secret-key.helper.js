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
function decryptVaultBySecretKeyHelper(encVault, secretKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = yield encryption_1.default.vaults.key.decryptBySecretKey(encVault.encKey, secretKey);
        const overview = yield encryption_1.default.vaults.overview.decryptByVaultKey(encVault.encOverview, key);
        const result = Object.assign({ key, overview: overview }, encVault);
        delete result.encKey;
        delete result.encOverview;
        return result;
    });
}
exports.default = decryptVaultBySecretKeyHelper;
//# sourceMappingURL=decrypt-vault-by-secret-key.helper.js.map