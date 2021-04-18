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
function createVaultHelper(overview, publicKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = encryption_1.default.common.generateCryptoRandomString(32);
        const encKey = yield encryption_1.default.vaults.key.encryptByPublicKey(key, publicKey);
        const encOverview = yield encryption_1.default.vaults.overview.encryptByVaultKey(overview, key);
        return {
            encKey,
            encOverview,
        };
    });
}
exports.default = createVaultHelper;
//# sourceMappingURL=create-vault.helper.js.map