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
exports.encryptVaultItem = exports.encryptDetailsByVaultKey = exports.encryptOverviewByVaultKey = exports.EncryptedVaultItem = void 0;
const encrypt_1 = require("../../common/aes/encrypt");
class EncryptedVaultItem {
}
exports.EncryptedVaultItem = EncryptedVaultItem;
const encryptOverviewByVaultKey = (overview, vaultKey) => {
    return encrypt_1.default(JSON.stringify(overview), vaultKey);
};
exports.encryptOverviewByVaultKey = encryptOverviewByVaultKey;
const encryptDetailsByVaultKey = (details, vaultKey) => {
    return encrypt_1.default(JSON.stringify(details), vaultKey);
};
exports.encryptDetailsByVaultKey = encryptDetailsByVaultKey;
const encryptVaultItem = (overview, details, vaultKey) => __awaiter(void 0, void 0, void 0, function* () {
    const vaultItem = yield Promise.all([
        exports.encryptOverviewByVaultKey(overview, vaultKey),
        exports.encryptDetailsByVaultKey(details, vaultKey),
    ]);
    return {
        encOverview: vaultItem[0],
        encDetails: vaultItem[1],
    };
});
exports.encryptVaultItem = encryptVaultItem;
exports.default = exports.encryptVaultItem;
//# sourceMappingURL=encryptByVaultKey.js.map