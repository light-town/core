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
const aes_1 = require("../../common/aes");
const utf_8_1 = require("../../common/utf-8");
function decryptOverviewByVaultKey(encryptedOverview, vaultKey) {
    return __awaiter(this, void 0, void 0, function* () {
        return JSON.parse(utf_8_1.default.decode(yield aes_1.default.decrypt(encryptedOverview, vaultKey)));
    });
}
exports.decryptOverviewByVaultKey = decryptOverviewByVaultKey;
function decryptDetailsByVaultKey(encryptedDetails, vaultKey) {
    return __awaiter(this, void 0, void 0, function* () {
        return JSON.parse(utf_8_1.default.decode(yield aes_1.default.decrypt(encryptedDetails, vaultKey)));
    });
}
exports.decryptDetailsByVaultKey = decryptDetailsByVaultKey;
function decryptVaultItemCategory(encryptedVaultItemCategory, vaultKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const [overview, details] = yield Promise.all([
            decryptOverviewByVaultKey(encryptedVaultItemCategory.encOverview, vaultKey),
            encryptedVaultItemCategory.encDetails
                ? decryptDetailsByVaultKey(encryptedVaultItemCategory.encDetails, vaultKey)
                : undefined,
        ]);
        return {
            overview,
            details,
        };
    });
}
exports.default = decryptVaultItemCategory;
//# sourceMappingURL=decrypt-by-vault-key.js.map