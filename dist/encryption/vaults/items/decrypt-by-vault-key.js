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
exports.decryptDetailsByVaultKey = exports.decryptOverviewByVaultKey = void 0;
const decrypt_1 = require("../../common/aes/decrypt");
function decryptOverviewByVaultKey(encryptedOverview, vaultKey) {
    return __awaiter(this, void 0, void 0, function* () {
        return JSON.parse(yield decrypt_1.default(encryptedOverview, vaultKey));
    });
}
exports.decryptOverviewByVaultKey = decryptOverviewByVaultKey;
function decryptDetailsByVaultKey(encryptedDetails, vaultKey) {
    return __awaiter(this, void 0, void 0, function* () {
        return JSON.parse(yield decrypt_1.default(encryptedDetails, vaultKey));
    });
}
exports.decryptDetailsByVaultKey = decryptDetailsByVaultKey;
function decryptVaultItem(encryptedVaultItem, vaultKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const [overview, details] = yield Promise.all([
            decryptOverviewByVaultKey(encryptedVaultItem.encOverview, vaultKey),
            encryptedVaultItem.encDetails
                ? decryptDetailsByVaultKey(encryptedVaultItem.encDetails, vaultKey)
                : undefined,
        ]);
        return {
            overview,
            details,
        };
    });
}
exports.default = decryptVaultItem;
//# sourceMappingURL=decrypt-by-vault-key.js.map