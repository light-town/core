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
exports.encryptDetailsByVaultKey = exports.encryptOverviewByVaultKey = void 0;
const aes_1 = require("../../common/aes");
function encryptOverviewByVaultKey(overview, vaultKey) {
    return aes_1.default.encrypt(JSON.stringify(overview), vaultKey);
}
exports.encryptOverviewByVaultKey = encryptOverviewByVaultKey;
function encryptDetailsByVaultKey(details, vaultKey) {
    return aes_1.default.encrypt(JSON.stringify(details), vaultKey);
}
exports.encryptDetailsByVaultKey = encryptDetailsByVaultKey;
function encryptVaultItem(overview, details, vaultKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const [encOverview, encDetails] = yield Promise.all([
            encryptOverviewByVaultKey(overview, vaultKey),
            encryptDetailsByVaultKey(details, vaultKey),
        ]);
        return {
            encOverview,
            encDetails,
        };
    });
}
exports.default = encryptVaultItem;
//# sourceMappingURL=encrypt-by-vault-key.js.map