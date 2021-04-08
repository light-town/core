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
exports.decryptVaultItem = exports.decryptDetailsByVaultKey = exports.decryptOverviewByVaultKey = exports.DecryptedVaultItem = void 0;
const decrypt_1 = require("../../common/aes/decrypt");
class DecryptedVaultItem {
}
exports.DecryptedVaultItem = DecryptedVaultItem;
const decryptOverviewByVaultKey = (encryptedOverview, vaultKey) => __awaiter(void 0, void 0, void 0, function* () {
    return JSON.parse(yield decrypt_1.default(encryptedOverview, vaultKey));
});
exports.decryptOverviewByVaultKey = decryptOverviewByVaultKey;
const decryptDetailsByVaultKey = (encryptedDetails, vaultKey) => __awaiter(void 0, void 0, void 0, function* () {
    return JSON.parse(yield decrypt_1.default(encryptedDetails, vaultKey));
});
exports.decryptDetailsByVaultKey = decryptDetailsByVaultKey;
const decryptVaultItem = (encryptedVaultItem, vaultKey) => __awaiter(void 0, void 0, void 0, function* () {
    const vaultItem = yield Promise.all([
        exports.decryptOverviewByVaultKey(encryptedVaultItem.encOverview, vaultKey),
        exports.decryptDetailsByVaultKey(encryptedVaultItem.encDetails, vaultKey),
    ]);
    return {
        overview: vaultItem[0],
        details: vaultItem[1],
    };
});
exports.decryptVaultItem = decryptVaultItem;
exports.default = exports.decryptVaultItem;
//# sourceMappingURL=decryptByVaultKey.js.map